import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';

export default class LinksScreen extends React.Component {
    static route = {
      navigationBar: {
        title: 'Links'
      },
    };
   render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.subNavigationBarTitle, {color: 'black'}]}>
          About
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
