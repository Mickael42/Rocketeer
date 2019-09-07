import React from 'react';
import { createDrawerNavigator, SafeAreaView, DrawerItems, AsyncStorage } from 'react-navigation';
import { Text, View, Image, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';



import HomeScreen from '../screens/HomeScreen';
import Register from '../screens/Register';
import ProductsList from '../screens/ProductsList';
import LogOut from '../screens/LogOut'
import Cart from '../screens/orderScreens/Cart'
import Colors from '../constants/Colors'



const CustomDrawerComponent = (props) => {
    return (

    < SafeAreaView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.brandColor }}>
            <Image source={require('../assets/images/Rocketeer-logo.png')} style={{ height: 80, width: 250 }}></Image>
        </View>
        <ScrollView>
            <DrawerItems {...props}></DrawerItems>
        </ScrollView>
    </SafeAreaView >


)
}

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Register: Register,
    ProductsList: ProductsList,
    Cart: Cart,
    Logout : LogOut

}, {
        contentComponent: CustomDrawerComponent,
        drawerPosition: "right"
    })

export default AppDrawerNavigator;