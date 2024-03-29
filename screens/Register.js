import React, { Component } from 'react'
import { Text, View, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles/Styles'
import HeaderDrawer from '../components/HeaderDrawer';



class Register extends Component {


    render() {
        const image = require('../assets/images/bg-img.jpeg');
        return (
            <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>
                 <HeaderDrawer navigation={this.props.navigation} routeName= {this.props.navigation.state.routeName}></HeaderDrawer>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.formContainer}>
                        <Text style={styles.labelInput}>User</Text>
                        <TextInput
                            style={styles.textInput}

                        />
                        <Text style={styles.labelInput}>Password</Text>
                        <TextInput
                            style={styles.textInput}

                        />
                        <Text style={styles.labelInput}>Adress</Text>
                        <TextInput
                            style={styles.textInput}

                        />
                        <Text style={styles.labelInput}>Email</Text>
                        <TextInput
                            style={styles.textInput}

                        />
                        <TouchableOpacity
                            style={styles.buttonType2}
                            onPress={this._signInAsync}>
                            <Text style={styles.textButtonType2}>Register</Text>
                        </TouchableOpacity>                        

                    </View>

                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

export default Register;

