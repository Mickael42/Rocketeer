import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import styles from './styles/Styles'

import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

import ProductSheet from "./ProductSheet";
import HeaderDrawer from '../components/HeaderDrawer';
import { getProducts } from '../service/WooCommerce';


class ProductList extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    products: []
  }


  componentDidMount() {
    return (getProducts)
      .then(getProducts => {
        this.setState({
          products: getProducts,
        });
        console.log(this.state.products)

      })
      .catch(error => {
        console.error(error);
      });
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderDrawer navigation={this.props.navigation}></HeaderDrawer>

        <View style={styles.containerProductsList}>

          {this.state.products.map((product, i) => {
            return (

              <View style={styles.containerEachProduct} key={i}>
                <View style={styles.containerProductPicture}>
                  <Image style={styles.imageProductList} source={{ uri: product.images[0].src }}></Image>
                </View>

                <View style={styles.containerProductText}>
                  <Text style={styles.titleProductList}>{product.name}</Text>
                  <ScrollView style={{ flex: 1 }}>
                    <HTML html={product.description} imagesMaxWidth={Dimensions.get('window').width} />
                  </ScrollView>

                  <TouchableOpacity
                    style={[styles.buttonType1, { alignSelf: 'center' }]}
                    onPress={() => this.props.navigation.navigate('ProductSheet')}>
                    <Text style={[styles.textButtonType1, { fontSize: 12, marginTop: 10, marginBottom: 10 }]}>Buy my rocket now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}







        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  ProductList: {
    screen: ProductList
  },
  ProductSheet: {
    screen: ProductSheet
  }
},

);

export default createAppContainer(AppNavigator);

