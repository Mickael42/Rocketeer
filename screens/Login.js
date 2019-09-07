import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage, ImageBackground, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles/Styles'



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }


  render() {
    const image = require('../assets/images/bg-img.jpeg');
    return (
      <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.labelInput}>User</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(userName) => this.setState({ userName })}
              value={this.state.text}

            />
            <Text style={styles.labelInput}>Password</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.text}

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
    if (this.state.userName === '' || this.state.password === '') {
      Alert.alert(
        'Error Login',
        'Please make sure to fill correctly all input',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    } else {
      await AsyncStorage.setItem('userName', this.state.userName);
      await AsyncStorage.setItem('userPassword', this.state.password);
      this.props.navigation.navigate('Main');
    }

  };
}

export default Login;

