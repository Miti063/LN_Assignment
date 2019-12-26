import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import GoogleSignInComp from './src/screens/GoogleSignIn';
import SplashPage from './src/components/Carousel';
import Navigation from './src/StackNavigation';
import { subscribeForNotification, unsubscribeEvents} from './src/components/Notifications';

const App = (props) => {
  const [showSplash, setShowSplash] = useState(true);

  //To listen for Notification
  useEffect(() => {
    subscribeForNotification();
  }, []);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 5000);
  });

  // Show splash page
  if (showSplash) return <SplashPage />;
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
