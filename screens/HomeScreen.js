import React, { Component } from 'react'
import { Text, ScrollView, View, AsyncStorage, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import HTML from 'react-native-render-html';
import Carousel from 'react-native-snap-carousel';

import HeaderDrawer from '../components/HeaderDrawer';
import styles from './styles/Styles'
import Colors from '../constants/Colors'


class HomeScreen extends Component {

  state = {
    products: [],

  }

  //Here, we get all data from the api that is storage in LocalStorage.
  //Then we choose only data about the first product in the state 
  async componentWillMount() {
    let values = await AsyncStorage.getItem("products");
    let products = await JSON.parse(values)
    this.setState({
      products: products,
    });
  }



  //Render for each product in the Carousel
  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image resizeMode="center" style={{ width: 100, height: 550 }} source={{ uri: item.images[0].src }}></Image>
        <Text style={[styles.text, { fontSize: 18, marginTop: 10, marginBottom: 10 }]}>{item.name}</Text>
        <TouchableOpacity
          style={styles.buttonType1}
        >
          <Text style={[styles.textButtonType1, { fontSize: 23, marginTop: 10, marginBottom: 10 }]}>Buy my rocket now!</Text>
        </TouchableOpacity>
        <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
          <HTML html={item.description} baseFontStyle={styles.text} imagesMaxWidth={300} />
        </View>

      </View>


    );
  }
  //In order to avoid problems, we have to make a condition in the render beacause this.state.product  take a little time to fill.
  //So first we render an Activity Indicator and when the state is fill, we show the home page
  render() {
    if (Object.keys(this.state.products).length == 0) {

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
            <HeaderDrawer navigation={this.props.navigation} routeName= {'Rocketeer'} ></HeaderDrawer>

            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.products}
              renderItem={this._renderItem}

              sliderWidth={360}
              itemWidth={360}

            />
          </View>
        </ScrollView>
      )
    }
  }
}



export default HomeScreen;
