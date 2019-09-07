import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import styles from './styles/Styles'

import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

import ProductSheet from "./ProductSheet";
import HeaderDrawer from '../components/HeaderDrawer';
import { getProducts } from '../service/WooCommerce';
import Colors from '../constants/Colors'



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

      })
      .catch(error => {
        console.error(error);
      });
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <HeaderDrawer navigation={this.props.navigation}></HeaderDrawer>



          <View style={styles.containerProductsList}>

            {this.state.products.map((product, i) => {
              return (

                <View style={styles.containerEachProduct} key={i}>
                  <View style={styles.containerProductPicture}>
                    <Image 
                    style={{width: '100%', height: "100%"}}
                    resizeMode="center"
                    source={{ uri: product.images[0].src }}></Image>
                  </View>

                  <View style={styles.containerProductText}>
                    <Text style={styles.titleProductList}>{product.name}</Text>
                    <ScrollView style={{ flex: 1 }}>
                      <HTML html={product.description} imagesMaxWidth={Dimensions.get('window').width} />
                    </ScrollView>

                    <TouchableOpacity
                      style={[styles.buttonType1, { alignSelf: 'center' }]}
                      onPress={() => this.props.navigation.navigate('ProductSheet', { productSelected: product })}>
                      <Text style={[styles.textButtonType1, { fontSize: 12, marginTop: 10, marginBottom: 10 }]}>Buy my rocket now!</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })}
          </View>

        </View>
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator({
  ProductList: {
    screen: ProductList
  },
  ProductSheet: {
    screen: ProductSheet
  },
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.brandColor,
      },
      headerTintColor: '#fff',
      headerTitle: <Image
        style={styles.logo}
        source={require('../assets/images/Rocketeer-logo.png')}
      />
    }
  }

);

export default createAppContainer(AppNavigator);

