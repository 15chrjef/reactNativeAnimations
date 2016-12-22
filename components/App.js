import Exponent, { Asset } from 'exponent';
import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import DrawerNavigationContainer from '../navigation/DrawerNavigationContainer.js';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default"/>
        <DrawerNavigationContainer />
      </View>
    );
  }
}
