import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles/Styles';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

class ProductSheet extends Component {
    render() {
        const { navigation } = this.props;
        const productSelected = navigation.getParam('productSelected');
        return (
            <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.containerPicturesProduct}>
                        <View style={styles.pictureActive}>
                            <Image style={{ width: 250, height: 250 }} source={{ uri: productSelected.images[0].src }} ></Image>
                        </View>
                        <View style={styles.pictureList}>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: productSelected.images[0].src }}></Image>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: productSelected.images[0].src }}></Image>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: productSelected.images[0].src }}></Image>
                        </View>
                    </View>
                    <View style={styles.containerDescriptionProduct}>
                        <Text style={styles.titleProductList}>{productSelected.name}</Text>
                        <Text style={styles.productSpecification}>Violence : Lorem Ipsum</Text>
                        <Text style={styles.productSpecification}>Speed : Lorem Ipsum</Text>
                        <Text style={styles.productSpecification}>Momentum : Lorem Ipsum</Text>
                        <Text style={[styles.productSpecification, { marginBottom: 10 }]}>Power : Lorem Ipsum</Text>
                        
                        <HTML html={productSelected.description} baseFontStyle={styles.text} />

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
