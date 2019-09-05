import React from 'react';
import { createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';



import HomeScreen from '../screens/HomeScreen';
import Register from '../screens/Register';
import ProductsList from '../screens/ProductsList';
import Cart from '../screens/orderScreens/Cart'
import Colors from '../constants/Colors'


const CustomDrawerComponent = (props) => (

    < SafeAreaView style={{flex : 1}}>
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.brandColor }}>
            <Image source={require('../assets/images/Rocketeer-logo.png')} style={{ height: 80, width: 250 }}></Image>
        </View>
        <ScrollView>
            <DrawerItems {...props}></DrawerItems>
        </ScrollView>
    </SafeAreaView >


)


const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Register: Register,
    ProductsList: ProductsList,
    Cart : Cart,
}, {
        contentComponent: CustomDrawerComponent,
        drawerPosition: "right"
    })

export default AppDrawerNavigator;