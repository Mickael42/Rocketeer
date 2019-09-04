import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthStack from './AuthStack';

import DrawerNavigator from './DrawerNavigator';



export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: DrawerNavigator,
      Auth: AuthStack,

    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

