import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator,AsyncStorage,StatusBar} from 'react-native'

class LogOut extends React.Component {
    constructor() {
      super();
      this._signOutAsync();
    }

// We use AsyncStorage.removeItem() in order to delete only user data that is in LocalStorage.
    _signOutAsync = async () => {
        await AsyncStorage.removeItem('userName');
        await AsyncStorage.removeItem('userPassword');
        this.props.navigation.navigate('Auth');
      };
    render() {
      return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }

  export default LogOut;