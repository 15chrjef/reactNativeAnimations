import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class DrawerHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>Drawer Header</Text>
      </View>
    );
  }
}
