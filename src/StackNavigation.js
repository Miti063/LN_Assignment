import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import GoogleSignIn from './screens/GoogleSignIn';
import TabNaviagtor from './TabNavigation';

class HomePageNavigation extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

const AppNavigator = createStackNavigator({
  GoogleSignIn: {
    screen: GoogleSignIn,
  },
  TabNaviagtor: {
    screen: TabNaviagtor,
  },
},{
  headerMode: 'none',
});

const AppContainer = createAppContainer(AppNavigator);

export default HomePageNavigation;