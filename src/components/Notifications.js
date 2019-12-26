import firebase from "react-native-firebase";
import { Linking } from "react-native";

import { storeData, getData } from './AsyncStorage';

let config = {
  apiKey: 'AIzaSyCrOvobqcQU5p0BvQzj9xlBcuPAcEaOdng',
  databaseURL: 'https://lendenassignment.firebaseio.com/',
  projectId: 'lendenassignment'
};

firebase.initializeApp(config);
// var ref = firebase
//   .app()
//   .database()
//   .ref();

this.notificationData = {};

subscribeForNotification = async callback => {
  await this.checkPermission();

  /*
   * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
   * */
  this.notificationOpenedListener = await firebase
    .notifications()
    .getInitialNotification();
  if (this.notificationOpenedListener === null) isNotificationOpened = false;
  if (this.notificationOpenedListener) {
    const notification: Notification = this.notificationOpenedListener
      .notification;
    if (this.notificationData.notificationId !== notification.notificationId) {
      this.notificationData = notification;
      this._openURL(notification.data, callback);
      firebase
        .notifications()
        .removeDeliveredNotification(notification.notificationId);
    }
  }

  const channel = new firebase.notifications.Android.Channel(
    "fcm_FirebaseNotifiction_default_channel",
    "Channel",
    firebase.notifications.Android.Priority.Max
  ).setDescription("My app channel");
  // Create the channel
  firebase.notifications().android.createChannel(channel);
  this.notificationListener = firebase
    .notifications()
    .onNotification((notification: Notification) => {
      // Process your notification as required
      notification.android
        .setChannelId("fcm_FirebaseNotifiction_default_channel")
        .android.setPriority(firebase.notifications.Android.Priority.Max);
      firebase.notifications().displayNotification(notification);
    });

  /*
   * If your app is in background/foreground, you can listen for when a notification is clicked / tapped / opened as follows:
   * */
  this.notificationOpenedListener = firebase
    .notifications()
    .onNotificationOpened((notificationOpen: NotificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification: Notification = notificationOpen.notification;
      this._openURL(notification.data, callback);
      firebase
        .notifications()
        .removeDeliveredNotification(notification.notificationId);
    });
};

_openURL = (data, callback) => {
  if (data.key_1 == 1) Linking.openURL(data.key_2);
  else if (data.key_1 == 2) callback();
  this.notificationOpenedListener = "";
};

//1
checkPermission = async () => {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    this.getToken();
  } else {
    this.requestPermission();
  }
};

//2
requestPermission = async () => {
  try {
    await firebase.messaging().requestPermission();
    // User has authorised
    this.getToken();
  } catch (error) {
    // User has rejected permissions
    console.log("permission rejected");
  }
};

//3
getToken = async () => {
  let fcmToken = await getData('fcmToken');
  console.log('--fcmToken---',fcmToken);
  if (!fcmToken) {
    fcmToken = await firebase.messaging().getToken();
    console.log('--fcmToken---',fcmToken);
    if (fcmToken) {
      // user has a device token
      this.writeUserData(fcmToken);
      await storeData('fcmToken', fcmToken);
    }
  }
};

writeUserData = token => {
  firebase
    .database()
    .ref("Tokens")
    .push({
      token
    })
    .then(data => {
      //success callback
      console.log("data ", data);
    })
    .catch(error => {
      //error callback
      console.log("error ", error);
    });
};

unsubscribeEvents = () => {
  this.notificationListener();
  this.notificationOpenedListener();
};

module.exports = { subscribeForNotification, unsubscribeEvents };