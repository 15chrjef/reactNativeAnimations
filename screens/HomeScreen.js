import React from 'react';
import Data from '../data'
import { connect } from 'react-redux';
import { profileLoad } from '../actions';
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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };

  }
  static route = {
    navigationBar: {
      title: 'Home'
    },
  }
  componentWillMount() {
    console.log('datadtadtadatadata', Data)
    this.props.profileLoad(Data)
  }
  render() {
    console.log(this.props)
    if(this.props.profiles.prop && this.props.profiles.prop.length > 0){
      console.log('asdfasdfasdfasd')
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      const { profiles } = this.props;
      return (
        <View style={styles.container}>
          <View style={{marginBottom: 10}}></View>
            <ListView
              initialListSize={3}
              scrollRenderAheadDistance={30}
              contentContainerStyle={styles.ListView}
              dataSource={ds.cloneWithRows(this.props.profiles.prop)}
              renderRow={(rowData) => (
                <View style={styles.row}>
                  <BouncyBox image={rowData.url1} text={rowData[1]}/>
                  <BouncyBox image={rowData.url2} text={rowData[2]}/>
                </View>
              )}
            />
            <View style={{marginTop:40}}></View>
        </View>
      );
    } else {
      return (
        <View>
          <Text>asdfasdfasdfasdfasdfasd</Text>
          <Text>{"'" + Array.isArray(this.props.profiles.prop) + "'"}</Text>
        </View>
      );
    }
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

const mapStateToProps = (state) => { 
  const { profiles } = state.profiles;
  return { profiles }; 
}
export default connect(mapStateToProps, { profileLoad })(HomeScreen);
