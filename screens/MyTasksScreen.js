import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
// Constants
import Colors from '../constants/Colors'
// Components
import HeaderTitle from '../components/HeaderTitle'
import DatePickerHeader from '../components/MyTasks/DatePickerHeader'
import KeyResultElement from '../components/MyTasks/KeyResultElement'

const data = [
    {
        description: 'Read 10 chapters',
        currentValue: 2,
        maxValue: 10,
        unit: 'Chapter',
        startTime: '09:00',
        endTime: '09:45',
        recurrence: 'Every 2 weeks on Mon, Wed'
    },
    {
        description: 'Finish 5 functions',
        currentValue: 2,
        maxValue: 5,
        unit: 'Function',
        startTime: '14:00',
        endTime: '16:00',
        recurrence: 'Every 2 days'
    },
    {
        description: 'Finish 8 designs',
        currentValue: 2,
        maxValue: 8,
        unit: 'Page',
        startTime: '10:00',
        endTime: '12:00',
        recurrence: 'Every week on Tue, Wed'
    },
];

class MyTasksScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <HeaderTitle title='My Tasks' />,
        headerLeft: (
            <Icon
                name="bars"
                type="font-awesome"
                color="white"
                onPress={navigation.toggleDrawer}
            />
        ),
    });

    renderList = ({ item }) => (
        <KeyResultElement item={item} />
    );

    renderKeyExtractor = (item, index) => index.toString();

    renderSeparator = () => {
        return (
            <View style={styles.separator} />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.datePickerHeader}>
                    <DatePickerHeader />
                </View>

                <View style={styles.keyResult}>
                    <FlatList
                        data={data}
                        renderItem={this.renderList}
                        keyExtractor={this.renderKeyExtractor}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
    },
    datePickerHeader: {
        flex: 0.08,
        backgroundColor: Colors.secondaryColor,
        paddingHorizontal: 20,
    },
    keyResult: {
        flex: 0.92,
        marginTop: 30,
        backgroundColor: 'grey',
    },
    separator: {
        height: 1,
        backgroundColor: "#E8E9E9",
    },
})

export default MyTasksScreen;