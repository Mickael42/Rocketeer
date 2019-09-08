import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/Styles'
import { createStackNavigator, createAppContainer } from "react-navigation";

import HeaderDrawer from '../../components/HeaderDrawer'
import Colors from '../../constants/Colors'
import Shipping from '../orderScreens/Shipping'
import Paiment from './Paiment';


class Cart extends Component {
    static navigationOptions = {
        header: null
      }
    render() {
        return (
            <View style={styles.mainContainer}>
                <HeaderDrawer navigation={this.props.navigation} routeName= {"Cart"}></HeaderDrawer>
                <View style={{ backgroundColor: Colors.brandColor, margin: 20, flex: 1 }}>
                    <View style={[styles.containerProductsList, { backgroundColor: "white", margin: 20 }]}>
                        <View style={styles.containerEachProduct}>
                            <View style={styles.containerProductPicture}>
                                <Image style={[styles.imageProductList, { width: 150, height: 120 }]} source={{ uri: 'https://picsum.photos/300/300' }}></Image>
                            </View>

                            <View style={[styles.containerProductText, { backgroundColor: Colors.smoothGrey,  marginRight : 0 }]}>
                                <Text style={styles.titleProductList}>Our best Rockets</Text>
                                <Text style={[styles.text, { textAlign: 'justify' }]}> Price : 1000000000€</Text>
                                <Text style={[styles.text, { textAlign: 'justify' }]}> Quantity : 1</Text>
                                <TouchableOpacity
                                    style={[styles.buttonType1, { alignSelf: 'center' }]}
                                >
                                    <Text style={[styles.textButtonType1, { fontSize: 12, marginTop: 10, marginBottom: 10 }]}> Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.containerProductsList, { backgroundColor: "white", margin: 20 }]}>
                        <View style={styles.containerEachProduct}>
                            <View style={styles.containerProductPicture}>
                                <Image style={[styles.imageProductList, { width: 150, height: 120 }]} source={{ uri: 'https://picsum.photos/300/300' }}></Image>
                            </View>

                            <View style={[styles.containerProductText, { backgroundColor: Colors.smoothGrey }]}>
                                <Text style={styles.titleProductList}>Our best Rockets</Text>
                                <Text style={[styles.text, { textAlign: 'justify' }]}> Price : 1000000000€</Text>
                                <Text style={[styles.text, { textAlign: 'justify' }]}> Quantity : 1</Text>
                                <TouchableOpacity
                                    style={[styles.buttonType1, { alignSelf: 'center' }]}
                                >
                                    <Text style={[styles.textButtonType1, { fontSize: 12, marginTop: 10, marginBottom: 10 }]}> Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={[styles.buttonType2, { alignSelf: 'center' }]}
                        onPress={()=> this.props.navigation.navigate('OrderSecondStep')}
                    >
                        <Text style={[styles.textButtonType2, { fontSize: 12, marginTop: 10, marginBottom: 10 }]}> Shipping</Text>
                    </TouchableOpacity>



                </View>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    OrderFisrtStep: {
      screen: Cart
    },
    OrderSecondStep: {
      screen: Shipping
    },
    OrderThirdStep :{
        screen : Paiment
    }
  },{
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.brandColor,

      },
      headerTintColor: '#fff',
    }
  }
);

  export default createAppContainer(AppNavigator);