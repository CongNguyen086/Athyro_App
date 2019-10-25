import React from 'react';
import { Icon } from 'react-native-elements'
// Constants
import Colors from '../constants/Colors'

export default StackNavigatorConfig = {
    /* The header config for all screens is now here */
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: Colors.tintColor,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLeftContainerStyle: { marginLeft: 20 },
        headerRight: <Icon name='bell' type='font-awesome' color='white' />,
        headerRightContainerStyle: { marginRight: 20 },
    },
};