import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import styles from './StyleHeader';


class HeaderNav extends Component {
    state = {
        menuCollapsed : true
      }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/Rocketeer-logo.png')}
                />

            </View>
        )
    }
}

export default HeaderNav;