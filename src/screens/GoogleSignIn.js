import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button, Image } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

export default class GoogleSigninSampleApp extends Component {
  state = {
    userInfo: null,
    error: null,
  };

  async componentDidMount() {
    this._configureGoogleSignIn();
    await this._getCurrentUser();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: '120271862011-juo4cpbcs1705f3ekepmqb0a4jjt1dql.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }

  async _getCurrentUser() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo, error: null });
    } catch (error) {
      const errorMessage =
        error.code === statusCodes.SIGN_IN_REQUIRED ? 'Please sign in :)' : error.message;
      this.setState({
        error: new Error(errorMessage),
      });
    }
  }

  render() {
    return (
      <View style={[styles.container, { flex: 1, justifyContent: 'flex-end', paddingBottom: '25%'}]}>
        <Image
          style={{width: 150, height: 90}}
          source={require('../assets/images/lendenclub-logo-dark.png')}
          resizeMode='contain'
        />
        {this.renderSignInButton()}
      </View>
    );
  }

  renderSignInButton() {
    return (
      <View style={[styles.container, {marginTop: 20}]}>
        <GoogleSigninButton
          style={{ width: 252, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Auto}
          onPress={this._signIn}
        />
      </View>
    );
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.props.navigation.navigate('TabNaviagtor')
      console.log('---userInfo---',userInfo);
      this.setState({ userInfo, error: null });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        console.log('---error---',error);
        Alert.alert('Something went wrong', error.toString());
        this.setState({
          error,
        });
      }
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});