/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {launchSDK} from 'simple-react-native-library2';

const App = () => {
  const launchHandler = () => {
    // console.log(NativeModules.AdaSDKModule)
    // console.log(NativeModules)
    console.log('ADA SDK LAUNCH REQUESTED!');
    const dummyURL = 'https://demo-assessment.consumer-stg.dev.ada.com/';
    launchSDK(
      'https://demo-assessment.consumer-stg.dev.ada.com/',
      (error, msg) => {
        console.log(msg);
      },
    );
  };

  return (
    <View style={styles.container}>
      <Button onPress={launchHandler} title="Launch SDK" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
