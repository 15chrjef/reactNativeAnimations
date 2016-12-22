import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
	Image
} from 'react-native';

export default class BouncyBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
	componentDidMount() {
		var self = this;
	 setTimeout( function(){
		 Animated.spring(self.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 1,                         // Animate to smaller size
        friction: 8,                          // Animate to smaller size
	 }).start()
	 } , 250 )                             // Start the animation
  }
	componentDidUnMount() {
    Animated.timing(this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0,                         // Animate to smaller size
        duration: this._defaultTransition                          // Bouncier spring
      }).start();                                // Start the animation
  }
  render() {
		console.log(this.props.image)
    return (
				<Animated.View                         // Base: Image, Text, View
					style={{transform: [                        // `transform` is an ordered array
            {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
          ]}}
					>	
					<View style={styles.shadowBox}>
						<Image style={{marginTop: 10, width: 177, height: 130}}  source={{uri:`${this.props.image}`}}/>
						<Text style={{fontSize: 20	}}>{this.props.text}</Text>
					</View>
				</Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  shadowBox: {
		marginTop: 20,
		alignItems:'center',
		shadowColor: 'black',
		width: 178,
		height: 178,
		backgroundColor: '#FCE4EC',
		shadowOpacity: 1,
		shadowOffset: {width: 1, height: 1},
		shadowRadius: 2,
  }
});
