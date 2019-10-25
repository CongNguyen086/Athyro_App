import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Alert } from 'react-native';
import { Icon } from 'react-native-elements'
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons'
// Constants
import Colors from '../../constants/Colors'
// Components
import DatePickerModal from './DateTimePicker'

class DatePickerHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            date: 'Today'
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    getDate = (day) => {
        this.setState({ date: moment(day.dateString).format('ll') })
        this.setModalVisible(false)
    }

    render() {
        const { modalVisible, date } = this.state
        return (
            <View style={styles.container}>
                <DatePickerModal modalVisible={modalVisible} onDayPress={this.getDate} />

                <View style={styles.previousIconWrapper}>
                    <Icon
                        name="caret-left"
                        type="font-awesome"
                        color="white"
                        size={25}
                    // onPress={navigation.toggleDrawer}
                    />
                </View>
                <TouchableHighlight style={styles.dateWrapper} onPress={() => this.setModalVisible(true)}>
                    <View style={styles.dateGroup}>
                        <Ionicons
                            name='md-calendar'
                            size={25}
                            color={Colors.tintColor}
                        />
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.nextIconWrapper}>
                    <Icon
                        name="caret-right"
                        type="font-awesome"
                        color="white"
                        size={25}
                    // onPress={navigation.toggleDrawer}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.secondaryColor,
    },
    previousIconWrapper: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'red',
    },
    dateWrapper: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'grey'
    },
    dateGroup: {
        flexDirection: 'row',
    },
    nextIconWrapper: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'blue'
    },
    date: {
        fontSize: 19,
        fontWeight: 'bold',
        color: Colors.tintColor,
        marginLeft: 10,
    },
})

export default DatePickerHeader;