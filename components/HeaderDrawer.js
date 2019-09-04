import React, { Component } from 'react';
import {Header, Left, Right, Icon} from 'native-base'
import {Image} from 'react-native'

import Colors from '../constants/Colors'


class HeaderDrawer extends Component {
    render(){
        return(
            <Header style={{backgroundColor : Colors.brandColor}}>
                <Image source={require('../assets/images/Rocketeer-logo.png')} style ={{width : 300, height : 80, alignItems:'center'}} />
                <Right style={{backgroundColor : "green"}}>
                    <Icon name ='menu' onPress = {()=> this.props.navigation.openDrawer()}></Icon>
                </Right>
            </Header>
        )
    }
}


export default HeaderDrawer;