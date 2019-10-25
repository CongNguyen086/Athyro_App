import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
// Constants
import Colors from '../constants/Colors';
import StackConfig from '../constants/StackConfig'
// Components
import TabBarIcon from '../components/TabBarIcon';
import MyTasksScreen from '../screens/MyTasksScreen';
import ObjectivesScreen from '../screens/ObjectivesScreen';
import CalendarScreen from '../screens/CalendarScreen';

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });

const MyTasksStack = createStackNavigator(
  {
    MyTasks: MyTasksScreen,
  },
  StackConfig
);

MyTasksStack.navigationOptions = {
  tabBarLabel: 'My Tasks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='list-ul'
    />
  ),
};

MyTasksStack.path = '';

const ObjectivesStack = createStackNavigator(
  {
    Objectives: ObjectivesScreen,
  },
  StackConfig
);

ObjectivesStack.navigationOptions = {
  tabBarLabel: 'Objectives',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='bullseye' />
  ),
};

ObjectivesStack.path = '';

const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen,
  },
  StackConfig
);

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='calendar' />
  ),
};

CalendarStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    MyTasksStack,
    ObjectivesStack,
    CalendarStack,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
