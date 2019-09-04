import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../styles/Styles';

import Colors from '../../constants/Colors';


class Shipping extends Component {


    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.mainContainerBlue}>

                    <View style={styles.containerFormShipping}>
                        <Text style={{fontSize : 24, marginBottom: 15, color : "white"}}>Shipping</Text>
                        <Text style={styles.labelInput}>First Name</Text>
                        <TextInput
                            style={styles.textInput}

                        />
                        <Text style={styles.labelInput}>Last Name</Text>
                        <TextInput
                            style={styles.textInput}

                        />
                        <Text style={styles.labelInput}>Launch Site</Text>
                        <TextInput
                            style={styles.textInput}

                        />
                        <Text style={styles.labelInput}>Country</Text>
                        <TextInput
                            style={styles.textInput}

                        />
                        <TouchableOpacity
                            style={styles.buttonType2}
                            onPress={()=> this.props.navigation.navigate('OrderThirdStep')}>
                            <Text style={styles.textButtonType2}>Confirmation</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

export default Shipping;

