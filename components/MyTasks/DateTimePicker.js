import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Alert } from 'react-native';
import { Icon } from 'react-native-elements'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
// Constants
import Colors from '../../constants/Colors'

class DatePickerModal extends Component {
    constructor(props) {
        super(props);
        // getDate = this.props.getDate(day);
    }

    renderArrow = (direction) => {
        let name = direction === 'left' ? 'caret-left' : 'caret-right'
        return (
            <Icon
                name={name}
                type="font-awesome"
                color={Colors.primaryColor}
                size={20}
            // onPress={navigation.toggleDrawer}
            />
        )
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Calendar
                            // Initially visible month. Default = Date()
                            current={Date()}
                            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                            minDate={Date()}
                            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                            // maxDate={'2012-05-30'}
                            // Handler which gets executed on day press. Default = undefined
                            onDayPress={(day) => this.props.onDayPress(day)}
                            // Handler which gets executed on day long press. Default = undefined
                            onDayLongPress={(day) => { console.log('selected day', day) }}
                            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                            monthFormat={'MMMM yyyy'}
                            // Handler which gets executed when visible month changes in calendar. Default = undefined
                            onMonthChange={(month) => { console.log('month changed', month) }}
                            // Hide month navigation arrows. Default = false
                            // hideArrows={true}
                            // Replace default arrows with custom ones (direction can be 'left' or 'right')
                            renderArrow={this.renderArrow}
                            // Do not show days of other months in month page. Default = false
                            // hideExtraDays={true}
                            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                            // day from another month that is visible in calendar page. Default = false
                            // disableMonthChange={true}
                            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                            firstDay={1}
                            // Hide day names. Default = false
                            // hideDayNames={true}
                            // Show week numbers to the left. Default = false
                            // showWeekNumbers={true}
                            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                            onPressArrowLeft={substractMonth => substractMonth()}
                            // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                            onPressArrowRight={addMonth => addMonth()}
                        />

                        {/* <TouchableHighlight
                            onPress={() => {
                                this.props.setModalVisible()
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight> */}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({

})

export default DatePickerModal;