import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Alert,
  Keyboard
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import FBLoginButton from '../components/FBLoginButton';
import * as Facebook from 'expo-facebook';
// Constants
// import ROOT from '../constants/Root';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/images/login_background.png');

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      name: '',
      name_valid: true,
      password: '',
      login_failed: false,
      showLoading: false,
    };
  }

  validatename(name) {
    var re = /^\d*$/;

    return re.test(name);
  }

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading,
    });
  }

  async _signInAsync(userId) {
    // const { userId } = this.state;
    await AsyncStorage.removeItem('@userToken')
    await AsyncStorage.setItem('@userToken', userId);
    this.props.navigation.navigate('Loading');
  };
  
  async _checkLogin() {
    const { name: name, password, showLoading } = this.state;
    this.setState({ showLoading: !showLoading });
    Keyboard.dismiss();
    // await AsyncStorage.clear();
    const response = await fetch(ROOT + `/login?name=${name}&password=${password}`);
    const jsonData = await response.json();
    console.log(jsonData[0])
    if (jsonData[0] != null) {
      this._signInAsync(jsonData[0].userId);
    } else {
      this.setState({
        showLoading: false,
      }, () => Alert.alert('Logged in failed', `Please check your name/password`));
    }
    
  };

  async loginFacebook() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('621612031578384', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        await AsyncStorage.removeItem('@userToken')
        await AsyncStorage.setItem('@userToken', token);
        Alert.alert(
            'Login successfully!', 
            `Hello ${(await response.json()).name}`,
            [{
                text: 'OK',
                onPress: () => this.props.navigation.navigate('Loading')
            }]
        );
      } else {
        // type === 'cancel'
        Alert.alert('Failed!', `Check your info`);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    const { name: name, password, name_valid: name_valid, showLoading } = this.state;
    console.log(SCREEN_HEIGHT);
    return (
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <View style={styles.loginView}>
            <View style={styles.loginInput}>
              <Input
                leftIcon={
                  <Icon
                    name="user-o"
                    type="font-awesome"
                    color="#CCCCCC"
                    size={25}
                  />
                }
                containerStyle={{ marginVertical: 10 }}
                onChangeText={name => this.setState({ name: name })}
                value={name}
                inputStyle={{ marginLeft: 10, color: 'white' }}
                keyboardAppearance="light"
                placeholder="Username"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                returnKeyType="next"
                ref={input => (this.emailInput = input)}
                onSubmitEditing={() => {
                  this.setState({ name_valid: this.validatename(name) });
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor="#CCCCCC"
                errorStyle={{ textAlign: 'center', fontSize: 12 }}
                errorMessage={
                  name_valid ? null : 'Please enter a valid username'
                }
              />
              <Input
                leftIcon={
                  <Icon
                    name="lock"
                    type="font-awesome"
                    color="#CCCCCC"
                    size={25}
                  />
                }
                containerStyle={{ marginVertical: 10 }}
                onChangeText={password => this.setState({ password })}
                value={password}
                inputStyle={{ marginLeft: 15, color: 'white' }}
                secureTextEntry={true}
                keyboardAppearance="light"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                returnKeyType="done"
                ref={input => (this.passwordInput = input)}
                blurOnSubmit={true}
                placeholderTextColor="#CCCCCC"
              />
            </View>
            <View style={styles.plusView}>
              <Button
                title="Quên mật khẩu?"
                type="clear"
                activeOpacity={0.5}
                titleStyle={styles.plusTitle}
                // containerStyle={styles.plusText}
                onPress={() => console.log('You press forgot password')}
              />
            </View>
            <Button
              title="TIẾP TỤC"
              activeOpacity={1}
              underlayColor="transparent"
              onPress={() => this._checkLogin()}
              loading={showLoading}
              loadingProps={{ size: 'small', color: 'white' }}
              disabled={!name_valid && password.length < 8}
              buttonStyle={{
                height: 50,
                width: 300,
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={styles.nextButton}
              titleStyle={{ fontWeight: 'bold', color: 'white' }}
            />
            <View style={styles.footerView}>
              <View style={styles.loginFBView}>
                <View style={styles.plusOrView}>
                  <Text style={styles.plusTitle}>Or</Text>
                </View>
                <View style={styles.facebookButton}>
                  <FBLoginButton onPress={() => this.loginFacebook()} />
                </View>
              </View>
              <View style={styles.signUpView}>
                <Text style={styles.signUpText}>Register</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  loginView: {
    flex: 1,
    marginTop: 300,
    backgroundColor: 'transparent',
    width: 300,
    // height: 400,
  },
  loginInput: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // loginTitle: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // travelText: {
  //   color: 'white',
  //   fontSize: 30,
  //   fontWeight: 'bold',
  // },
  plusView: {
    flex: 0.14,
    alignItems: 'flex-end',
    marginTop: -5,
  },
  nextButton: {
    flex: 0.06,
    marginTop: -10,
  },
  plusTitle: {
    fontFamily: 'Roboto',
    color: '#CCCCCC',
    fontSize: 15,
  },
  footerView: {
    marginTop: 80,
    flex: 0.6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusOrView: {
    width: 300,
    borderTopColor: '#CCCCCC',
    borderTopWidth: 0.5,
    paddingTop: 15,
    alignItems: 'center',
  },
  loginFBView: {
    flex: 0.8,
    alignItems: 'center',
  },
  // plusText: {
  //   // fontWeight: 'normal',
  //   // marginTop: 3,
  // },
  facebookButton: {
    marginTop: 15, 
  },
  signUpView: {
    flex: 0.2,
    alignItems: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});


export default LoginScreen;