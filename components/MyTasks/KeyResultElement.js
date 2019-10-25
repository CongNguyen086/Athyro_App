import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
// Constants
import Colors from '../../constants/Colors'
import Style from '../../constants/Style'
// Components
import ProgressBar from '../ProgressBar'

const LeftElement = ({ item: { description, maxValue, currentValue } }) => {
    const ratio = currentValue/maxValue
    const text = `${currentValue.toString()}/${maxValue.toString()}`
    return (
        <View style={styles.leftContainer}>
            <View style={styles.titleWrapper}>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.valueWrapper}>
                <ProgressBar 
                    containerStyle={styles.bar}
                    activeFlex={ratio}
                    activeColor='#4DB96B'
                    textStyle={styles.barText}
                    text={text}
                />
            </View>
            <View style={styles.iconWrapper}>
                <Icon
                    name="caret-down"
                    type="font-awesome"
                    color={Colors.primaryColor}
                    size={25}
                // onPress={navigation.toggleDrawer}
                />
            </View>
        </View>
    )
}

const RightElement = ({ item: { startTime, endTime, unit, recurrence } }) => {
    return (
        <View style={styles.rightContainer}>
            <View style={styles.timeWrapper}>
                <Text style={styles.time}>{startTime} - {endTime}</Text>
            </View>
            <View style={styles.unitWrapper}>
                <Text style={styles.unit}>{unit}</Text>
            </View>
            <View style={styles.recurrenceWrapper}>
                <Text style={styles.recurrence} numberOfLines={2} ellipsizeMode='tail' >{recurrence}</Text>
            </View>
        </View>
    )
}

class KeyResultElement extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props
        return (
            <ListItem
                containerStyle={styles.listItem}
                contentContainerStyle={{ flex: 0.02 }}
                leftElement={<LeftElement item={item} />}
                rightElement={<RightElement item={item} />}
                pad={3}
            />
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        height: 120,
        // backgroundColor: 'red',
    },
    leftContainer: {
        flex: 0.65,
        // backgroundColor: 'blue',
    },
    rightContainer: {
        flex: 0.33,
        alignItems: 'flex-end',
        // backgroundColor: 'green',
    },
    titleWrapper: {
        flex: 0.35,
    },
    valueWrapper: {
        flex: 0.35,
        // borderWidth: 2,
        // borderColor: 'black'
    },
    iconWrapper: {
        flex: 0.3,
        alignItems: 'flex-start',
        // borderWidth: 2,
        // borderColor: 'black'
    },
    timeWrapper: {
        flex: 0.35,
        // borderWidth: 2,
        // borderColor: 'black',
    },
    unitWrapper: {
        flex: 0.35,
        // borderWidth: 2,
        // borderColor: 'black',
    },
    recurrenceWrapper: {
        flex: 0.3,
    },
    description: {
        fontSize: Style.titleSize,
        fontWeight: 'bold',
    },
    bar: {
        flex: 0.6,
        borderColor: Colors.extraTextColor,
        backgroundColor: Colors.bgColor,
    },
    barText: {
        fontSize: Style.defaultSize,
        fontWeight: 'bold',
    },
    time: {
        fontSize: Style.titleSize,
    },
    unit: {
        fontSize: Style.titleSize,
        color: '#7E0808',
    },
    recurrence: {
        fontSize: Style.defaultSize,
        color: Colors.extraTextColor,
    },
})

export default KeyResultElement;