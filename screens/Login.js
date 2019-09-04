import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles/Styles'



class Login extends Component {


  render() {
    const image = require('../assets/images/bg-img.jpeg');
    return (
      <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.labelInput}>User</Text>
            <TextInput
              style={styles.textInput}
             
            />
            <Text style={styles.labelInput}>Password</Text>
            <TextInput
              style={styles.textInput}
              
            />
            <TouchableOpacity
              style={styles.buttonType2}
              onPress={this._signInAsync}>
              <Text style={styles.textButtonType2}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}

export default Login;

