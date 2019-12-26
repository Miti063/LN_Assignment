export default async (message) => {
//   handle your message
  const notification = new firebase.notifications.Notification()
  .setNotificationId(message.messageId)
  .setTitle(message.data.title)
  .setBody(message.data.body)
  .setData(message.data)
  .android.setChannelId('fcm_FirebaseNotifiction_default_channel')
  .android.setPriority(firebase.notifications.Android.Priority.Max)
  // .setSound('default');

  await firebase.notifications().displayNotification(notification);
  return Promise.resolve();
}