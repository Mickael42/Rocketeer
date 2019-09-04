import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles/Styles';


class ProductSheet extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.containerPicturesProduct}>
                    <View style={styles.pictureActive}>
                    <Image  style={{width: 250, height: 250}}  source={{ uri:'https://picsum.photos/300/300'}}></Image>
                    </View>
                    <View style={styles.pictureList}>
                        <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://picsum.photos/300/300' }}></Image>
                        <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://picsum.photos/300/300' }}></Image>
                        <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://picsum.photos/300/300' }}></Image>
                    </View>
                </View>
                <View style={styles.containerDescriptionProduct}>
                    <Text style={styles.titleProductList}>Rocket Name</Text>
                    <Text style={styles.productSpecification}>Violence : Lorem Ipsum</Text>
                    <Text style={styles.productSpecification}>Speed : Lorem Ipsum</Text>
                    <Text style={styles.productSpecification}>Momentum : Lorem Ipsum</Text>
                    <Text style={[styles.productSpecification, { marginBottom: 10 }]}>Power : Lorem Ipsum</Text>
                    <Text style={styles.text}>Thus the heavens and the earth of every kind, and everything that creeps upon the ground of every kind on earth that bear fruit with the seed in it. And it was very good. And there was evening and there was morning, the second river is the Euphrates. Therefore the LORD God took the man and for his wife, and clothed them. God blessed them, saying.
</Text>
                    <TouchableOpacity
                        style={[styles.buttonType1, { alignSelf: 'center' }]}>
                        <Text style={[styles.textButtonType1, { fontSize: 18, marginTop: 10, marginBottom: 10, fontWeight: 'bold' }]}>Buy it!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ProductSheet;
