import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

function ProgressBar(props) {
    const { containerStyle, activeFlex, activeColor, textStyle, text } = props;

    const activeColorStyle = { backgroundColor: activeColor }
    const activeFlexStyle = { flex: activeFlex }
    return(
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.activeBar, activeFlexStyle, activeColorStyle]}>
                <Text style={textStyle}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
    },
    activeBar: {
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
})

export default ProgressBar;