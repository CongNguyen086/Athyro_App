import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const FBLoginButton = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Icon.Button
                name="facebook"
                backgroundColor="#4267B2"
                size={30}
                color="white"
                {...props}
            >
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                    Login with Facebook
                </Text>
            </Icon.Button>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5,
        elevation: 3,
    },
});

export default FBLoginButton;