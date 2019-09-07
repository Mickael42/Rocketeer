import React, { Component } from 'react'
import { Text, ScrollView, View, Button, AsyncStorage, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import HTML from 'react-native-render-html';


import HeaderDrawer from '../components/HeaderDrawer';
import styles from './styles/Styles'
import Colors from '../constants/Colors'


class HomeScreen extends Component {

  state = {
    product: {},

  }

  //Here, we get all data from the api that is storage in LocalStorage.
  //Then we choose only data about the first product in the state 
  async componentWillMount() {
    let values = await AsyncStorage.getItem("products");
    let product = await JSON.parse(values)
    this.setState({
      product: product[0],
    });
  }

  //In order to avoid problems, we have to make a condition in the render beacause this.state.product  take a little time to fill.
  //So first we render an Activity Indicator and when the state is fill, we show the home page
  render() {
    if (Object.keys(this.state.product).length == 0) {

      return (
        <View style={styles.mainContainerActivityIndicator}>
          <View >
            <ActivityIndicator size="large" color={Colors.brandColor} />
          </View>

        </View>
      )

    } else {
      return (
        <ScrollView>
          <View style={styles.mainContainer}>
            <HeaderDrawer navigation={this.props.navigation}></HeaderDrawer>
            <View style={styles.homePageContainer}>
              <Image style={{ width: 50, height: 500 }} source={{ uri: this.state.product.images[0].src }}></Image>
              <Text style={[styles.text, { fontSize: 18, marginTop: 10, marginBottom: 10 }]}>{this.state.product.name}</Text>
              <TouchableOpacity
                style={styles.buttonType1}
              >
                <Text style={[styles.textButtonType1, { fontSize: 23, marginTop: 10, marginBottom: 10 }]}>Buy my rocket now!</Text>
              </TouchableOpacity>
              <HTML html={this.state.product.description} baseFontStyle={styles.text} imagesMaxWidth={Dimensions.get('window').width} />
              <Button title="Déconnexion" onPress={this._signOutAsync} />
            </View>
          </View>
        </ScrollView>
      )
    }
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };


}



export default HomeScreen;
