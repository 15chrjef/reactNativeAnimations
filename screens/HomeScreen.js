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
var urls = ['http://65.media.tumblr.com/avatar_466269d1c153_128.png', 'https://qph.ec.quoracdn.net/main-thumb-128119-50-nmklkwnihopmdvhwsgyonlaxkvtsggcv.jpeg', 'https://images.unsplash.com/profile-fb-1448375329-0a3ca8bb82ee.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=9ff0504caede3d657c939c292dd5ff4d' ,'http://videofruit.com/wp-content/uploads/2016/09/7181f7f15283dad49da0b34a22f01b7b.jpg','https://qph.ec.quoracdn.net/main-thumb-135641074-50-aysrtygyvzfuhkckdhrtnbnvaeeapdbp.jpeg', 'http://crossfitadvantage.com/wp-content/uploads/thumbs/xandy100-31uigo7fbg4ty17bukbsao.jpg', 'https://pbs.twimg.com/profile_images/710805146616340482/OkMhTC-P_normal.jpg', 'http://cdn.rsvlts.com/wp-content/uploads/2014/10/avatar_f19bd5f0a9dd_128.png', 
'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtegoVP2q8EERP5LnFjJy5JONbSEAFYFji2ZtvLvJ-lfXv45cX', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjLPl0UPn_nLQe_GFkpJuy9w5pdW2eY83KYP5MvzlhV4rjp5RpVg', 
'http://0.gravatar.com/avatar/e9836855ca547d69422901ec71b4b85f?s=40&d=http%3A%2F%2Fwww.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&r=G', 'https://qph.ec.quoracdn.net/main-thumb-127552196-50-kmqaccblbcbryjjqbmsmpkvjehuedgqm.jpeg',
'http://68.media.tumblr.com/avatar_82f7a3b01d3e_128.png']
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
          <ListView
            initialListSize={3}
            scrollRenderAheadDistance={30}
            contentContainerStyle={styles.ListView}
            dataSource={this.state.dataSource}
    renderRow={(rowData) => <View style={styles.row}><BouncyBox image={urls[Math.floor(Math.random() * 12)]} text={rowData[1]}/><BouncyBox image={urls[Math.floor(Math.random() * 12) + 1]}  text={rowData[2]}/></View>}
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
    marginTop: 40,
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
