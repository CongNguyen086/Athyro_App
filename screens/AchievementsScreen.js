import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
// Components
import HeaderTitle from '../components/HeaderTitle'

class AchievementsScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: <HeaderTitle title='Achievements' />,
        headerLeft: (
            <Icon
                name="bars"
                type="font-awesome"
                color="white"
                onPress={navigation.toggleDrawer}
            />
        ),
    });

    render() {
        return (
            <View></View>
        )
    }
}

export default AchievementsScreen;