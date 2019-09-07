import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import HeaderNav from '../components/HeaderNav';
import Colors from '../constants/Colors';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.brandColor,
        borderBottomColor : 'white',
        borderBottomWidth: 2
      },
      headerTitle: <HeaderNav></HeaderNav>
    }
  }
);

export default AuthStack;
