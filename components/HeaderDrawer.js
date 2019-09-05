import React, { Component } from 'react';
import { Header, Left, Right, Icon, View } from 'native-base'
import { Image, Text } from 'react-native'

import Colors from '../constants/Colors'


class HeaderDrawer extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: Colors.brandColor, justifyContent: 'center', alignItems:'center' }}>
                <Text style={{ color: 'white', flex: 9, textAlign:'center', fontSize:27 }}>Rocketeer</Text>
                <Icon name='menu' style={{ color: 'white', flex: 1 }} onPress={() => this.props.navigation.openDrawer()}></Icon>

            </Header>
        )
    }
}


export default HeaderDrawer;