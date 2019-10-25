import React from 'react';
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

const HeaderLeft = () => {
    return (
        <Icon
            name="menu"
            type="entypo"
            color='white'
            // onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
    )
}

export default withNavigation(HeaderLeft)