import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import styles from './styles/Styles'

import ProductSheet from "./ProductSheet";
import HeaderDrawer from '../components/HeaderDrawer';


class ProductList extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderDrawer navigation={this.props.navigation}></HeaderDrawer>

        <View style={styles.containerProductsList}>
          <View style={styles.containerEachProduct}>
            <View style={styles.containerProductPicture}>
              <Image style={styles.imageProductList} source={{ uri: 'https://picsum.photos/300/300' }}></Image>
            </View>

            <View style={styles.containerProductText}>
              <Text style={styles.titleProductList}>Our best Rockets</Text>
              <Text style={[styles.text, { textAlign: 'justify' }]}>In the day that you eat of it your eyes will be like God, knowing good and evil. God made the earth were finished, and all their multitude. Thorns and thistles it shall bring forth children, yet your desire shall be for your husband, and he rested on the seventh day and over the birds of the air.
</Text>
              <TouchableOpacity
                style={[styles.buttonType1, { alignSelf: 'center' }]}
                onPress={() => this.props.navigation.navigate('ProductSheet')}>
                <Text style={[styles.textButtonType1, { fontSize: 12, marginTop: 10, marginBottom: 10 }]}>Buy my rocket now!</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containerProductsList}>
            <View style={styles.containerEachProduct}>
              <View style={styles.containerProductPicture}>
                <Image style={styles.imageProductList} source={{ uri: 'https://picsum.photos/300/300' }}></Image>
              </View>

              <View style={styles.containerProductText}>
                <Text style={styles.titleProductList}>Our best Rockets</Text>
                <Text style={[styles.text, { textAlign: 'justify' }]}>In the day that you eat of it your eyes will be like God, knowing good and evil. God made the earth were finished, and all their multitude. Thorns and thistles it shall bring forth children, yet your desire shall be for your husband, and he rested on the seventh day and over the birds of the air.
</Text>
                <TouchableOpacity
                  style={[styles.buttonType1, { alignSelf: 'center' }]}
                  onPress={() => this.props.navigation.navigate('ProductSheet')}>
                  <Text style={[styles.textButtonType1, { fontSize: 12, marginTop: 10, marginBottom: 10 }]}>Buy my rocket now!</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
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

