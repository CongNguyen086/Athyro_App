import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import StackConfig from '../constants/StackConfig';

import Loading from '../screens/LoadingScreen'
import Login from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';

const DrawerStack = createStackNavigator(
  {
    DrawerNavigator,
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    Login: Login,
    Drawer: DrawerStack,
  },
  {
    initialRouteName: 'Drawer',
  }
);

export default createAppContainer(AppNavigator);
