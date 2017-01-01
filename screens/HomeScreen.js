import React from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  LayoutAnimation,
  Dimensions,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import BouncyBox from '../components/BouncyBox.js'
import { MonoText } from '../components/StyledText';
var urls = ['http://www.topito.com/wp-content/uploads/2010/02/marisa-miller.jpg', 'http://www.kiosktoday.com/wp-content/uploads/2015/09/5201.jpg' ,'http://bit.ly/2ikSUXQ','http://bit.ly/2hXD0Q9', 'http://bit.ly/2hB74A7', 'http://bit.ly/2iC9YWN', 'http://bit.ly/2iSmKUB','http://bit.ly/2iCaioJ', 'http://bit.ly/2hFVEj7', 'http://bit.ly/2ikJv2b', 'http://bit.ly/2iRuy4Z','http://bit.ly/2iql3uF']
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      bounceValue: new Animated.Value(0),
      dataSource: ds.cloneWithRows([{ 1:'ads',2:'ads'},{ 1:'ads',2:'ads'},{ 1:'ads',2:'ads'},{ 1:'ads',2:'ads'},
      { 1:'ads',2:'ads'},{ 1:'ads',2:'ads'},{ 1:'s',2:'s'},{ 1:'s',2:'s'},{ 1:'s',2:'s'}])
    };
    
  }
  static route = {
    navigationBar: {
      title: 'Home'
    },
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 10}}></View>
          <ListView
            initialListSize={3}
            scrollRenderAheadDistance={30}
            contentContainerStyle={styles.ListView}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => (
              <View style={styles.row}>
                <BouncyBox image={urls[Math.floor(Math.random() * 12)]} text={rowData[1]}/>
                <BouncyBox image={urls[Math.floor(Math.random() * 12)]} text={rowData[2]}/>
              </View>
            )}
          />
          <View style={{marginTop:40}}></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ListView: {
    justifyContent: 'center',
  },
  row:{
    marginTop: 10,
    flexDirection: 'row',
    width: width * .95,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
   
});
