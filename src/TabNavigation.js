import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dashboard from './screens/Dashboard/Dashboard';
import Funds from './screens/Funds/Funds';
import Profile from './screens/Profile/Profile';
import Report from './screens/Report/Report';

class HomePageNavigation extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Dashboard: Dashboard,
  Funds: Funds,
  Report: Report,
  Profile: Profile,
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = FontAwesome;
      let iconName;
      if (routeName === 'Dashboard') {
        iconName = 'signal';
      } else if (routeName === 'Funds') {
        iconName = `compass`;
      } else if (routeName === 'Report') {
        iconName = `table`;
      } else if(routeName === 'Profile') {
        iconName='user'
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);

const AppContainer = createAppContainer(TabNavigator);

export default HomePageNavigation;