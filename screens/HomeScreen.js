import React, { Component } from 'react'
import { Text, View, Button, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import styles from './styles/Styles'

import HeaderDrawer from '../components/HeaderDrawer';




export default class Historique extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderDrawer navigation={this.props.navigation}></HeaderDrawer>
        <View style={styles.homePageContainer}>
          <Image  style={{width: 300, height: 300}}  source={{ uri:'https://place-hold.it/300'}}></Image>
          <Text style={[styles.text, {fontSize:18, marginTop : 10, marginBottom : 10}]}>Our best Rockets</Text>
          <TouchableOpacity
            style={styles.buttonType1}>
            <Text style={[styles.textButtonType1, {fontSize:23, marginTop : 10, marginBottom:10}]}>Buy my rocket now!</Text>
          </TouchableOpacity>

          <Text style={styles.text}>They heard the sound of the fruit of the trees of the earth, and to every beast of the earth. To rule over the fish of the sea and over the birds of the sea, and over the day and hallowed it, because on it God rested from all the wild animals of the knowledge of good and evil; and now, he might reach out his hand and take also from the presence of the LORD God said, Let the waters bring forth swarms of living creatures, and let birds multiply on the earth.
</Text>
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      </View>
    )
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

}


