import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
	Image,
  TouchableWithoutFeedback
} from 'react-native';
var ACTION_TIMER = 1000;
var COLORS = ['#FCE4EC', '#F06292'];

export default class BouncyBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
      pressAction: new Animated.Value(0),
      buttonWidth: 0,
    };
    this.handlePressIn = this.handlePressIn.bind(this)
    this.handlePressOut = this.handlePressOut.bind(this)
    this.getProgressStyles = this.getProgressStyles.bind(this)
    this.getButtonWidthLayout = this.getButtonWidthLayout.bind(this)
  }
  componentWillMount() {
    this._value = 0;
    this.state.pressAction.addListener((v) => this._value = v.value)
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
  handlePressIn() {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1
    }).start();
  }
  handlePressOut() {
    Animated.timing(this.state.pressAction, {
      duration: this._value * ACTION_TIMER,
      toValue: 0
    }).start()
  }
   getButtonWidthLayout(e) {
    this.setState({
        buttonWidth: e.nativeEvent.layout.width - 6,
        buttonHeight: e.nativeEvent.layout.height - 6
    });
  }
  getProgressStyles() {
    var width = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.buttonWidth]
    })
    var bgColor = this.state.pressAction.interpolate ({
      inputRange: [0, 1],
      outputRange: COLORS
    })
    console.log(COLORS[0], COLORS[1])
    console.log(this.state.buttonWidth, bgColor, width)
    return {
      width: this.state.width,
      height: this.state.height,
      backgroundColor: bgColor,
    }
  }
  render() {
		console.log(this.props.image)
    return (
      <TouchableWithoutFeedback 
        style={{width: 177}}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        >
         <Animated.View     
          onLayout={this.getButtonWidthLayout}
					style={[{ transform: [                        // `transform` is an ordered array
            {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
          ]}, styles.shadowBox, this.getProgressStyles()]}
					>
            <Image style={{marginTop: 10, width: 177, height: 130}}  source={{uri:`${this.props.image}`}}/>
            <Text style={{fontSize: 20, alignSelf: 'center'}}>{this.props.text}</Text>
          </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  shadowBox: {    
		shadowColor: 'black',
		shadowOpacity: 1,
		shadowOffset: {width: 1, height: 1},
		shadowRadius: 2,
  },
});
