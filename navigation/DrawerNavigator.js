import React from 'react';
import { Platform, View, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements'
// Constants
import StackConfig from '../constants/StackConfig';
// Components
import MainTabNavigator from '../navigation/MainTabNavigator';
import AchievementsScreen from '../screens/AchievementsScreen';
import ReportScreen from '../screens/ReportScreen';
import AccountScreen from '../screens/AccountScreen';

const WINDOW_WIDTH = Dimensions.get('window').width;
const CustomDrawerContentComponent = props => (
    <View style={{ marginTop: 22, flex: 1, backgroundColor: 'white' }}>
        <View
            style={{ flex: 0.2, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
        >
            <Image
                source={require('../assets/images/goalify_logo.png')}
                style={{ width: Math.min(WINDOW_WIDTH * 0.57, 200) }}
                resizeMode="contain"
            />
        </View>
        <View style={{ flex: 0.8 }}>
            <DrawerItems {...props} />
        </View>
    </View>
);

const AchievementsStack = createStackNavigator(
    {
        AchievementsScreen,
    },
    StackConfig
)

const ReportStack = createStackNavigator(
    {
        ReportScreen,
    },
    StackConfig
)

const AccountStack = createStackNavigator(
    {
        AccountScreen,
    },
    StackConfig
)

const drawerNavigator = createDrawerNavigator(
    {
        MySchedulesStack: MainTabNavigator,
        AchievementsStack,
        ReportStack,
        AccountStack,
    },
    {
        initialRouteName: 'MySchedulesStack',
        drawerBackgroundColor: 'transparent',
        contentComponent: CustomDrawerContentComponent,
    }
);

drawerNavigator.path = '';

export default drawerNavigator;