import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';

import Colors from '../../constants/Colors';


class Paiment extends Component {


    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.mainContainerBlue}>
                    <View style={styles.containerFormShipping}>
                        <Text style={{ fontSize: 24, marginBottom: 15, color: "white" }}>Confirmation</Text>
                        <Text style={[styles.text, {color:'white'}]}>Total Amount : 45 €</Text>
                        <Text style={[styles.text, {color:'white'}]}>Paiment at the delivery</Text>
                        <TouchableOpacity
                            style={styles.buttonType2}
                            onPress={this._signInAsync}>
                            <Text style={styles.textButtonType2}>Order</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

export default Paiment;

