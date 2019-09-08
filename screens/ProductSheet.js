import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles/Styles';
import { ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

class ProductSheet extends Component {
    
    static navigationOptions = {
          title: 'Rocket Specifications',
    }

    render() {
        const { navigation } = this.props;
        const productSelected = navigation.getParam('productSelected');
        return (
            <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.containerPicturesProduct}>
                        <View style={styles.pictureActive}>
                            <Image  resizeMode="center" style={{ width: 100, height: 550 }} source={{ uri: productSelected.images[0].src }} ></Image>
                        </View>
                        <View style={styles.pictureList}>
                            <Image  resizeMode="center" style={{ width: 50, height: 50 }} source={{ uri: productSelected.images[0].src }}></Image>
                            <Image  resizeMode="center" style={{ width: 50, height: 50 }} source={{ uri: productSelected.images[0].src }}></Image>
                            <Image  resizeMode="center" style={{ width: 50, height: 50 }} source={{ uri: productSelected.images[0].src }}></Image>
                        </View>
                    </View>
                    <View style={styles.containerDescriptionProduct}>
                        <Text style={styles.titleProductList}>{productSelected.name}</Text>
                        <Text style={styles.productSpecification}>{productSelected.attributes[0].name} : {productSelected.attributes[0].options[0]}</Text>
                        <Text style={styles.productSpecification}>{productSelected.attributes[1].name} : {productSelected.attributes[1].options[0]}</Text>
                        <Text style={styles.productSpecification}>{productSelected.attributes[2].name} : {productSelected.attributes[2].options[0]}</Text>
                        <Text style={styles.productSpecification}>Price : {productSelected.price} €</Text>



                        <View style={{ marginLeft: 20, marginRight: 20 }}>
                            <HTML html={productSelected.description} baseFontStyle={styles.text} />
                        </View>

                        <TouchableOpacity
                            style={[styles.buttonType1, { alignSelf: 'center' }]}>
                            <Text style={[styles.textButtonType1, { fontSize: 18, marginTop: 10, marginBottom: 10, fontWeight: 'bold' }]}>Buy it!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default ProductSheet;
