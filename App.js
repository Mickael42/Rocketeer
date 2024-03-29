import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import { getProducts } from './service/WooCommerce';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [data, setData] = useState('');

  const _getProducts = () => {
    return (getProducts)
      .then(getProducts => {
        setData(getProducts)
        AsyncStorage.setItem("products",JSON.stringify(getProducts));

      })
      .catch((e) => {
        console.log(e)
      });
  }


  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={_getProducts}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true} />
        <AppNavigator screenProps={data} />
      </View>
    );
  }
}




async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'space-mono-bold': require('./assets/fonts/SpaceMono-Bold.ttf'),
      'space-mono-italic': require('./assets/fonts/SpaceMono-RegularItalic.ttf'),
    })
    ,
  ]);
}





function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
