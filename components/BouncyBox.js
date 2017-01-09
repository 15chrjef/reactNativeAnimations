import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
	Image,
  TouchableWithoutFeedback
} from 'react-native';
var ACTION_TIMER = 500;

export default class BouncyBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
      pressAction: new Animated.Value(0),
      buttonWidth: 0,
      buttonHeight: 0,
      textStyle: styles.text1
    };
    this.handlePressIn = this.handlePressIn.bind(this)
    this.handlePressOut = this.handlePressOut.bind(this)
    this.getProgressStyles = this.getProgressStyles.bind(this)
    this.getButtonWidthLayout = this.getButtonWidthLayout.bind(this)
    this.textStyles = this.textStyles.bind(this)
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
	 } , 150 )                             // Start the animation
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
        buttonWidth: e.nativeEvent.layout.width,
        buttonHeight: e.nativeEvent.layout.height
    });
  }
  getProgressStyles() {
    var width = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.buttonWidth]
    })
    return {
      width: width,
      height: this.state.buttonHeight,
      backgroundColor: '#F06292',
    }
  }
  textStyles() {
    var color = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: ['black', 'white']
    })
    return {
      color: color,
      fontSize: 20, 
      alignSelf: 'center', 
      backgroundColor: 'transparent'
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback 
        style={{width: 177}}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        onLayout={this.getButtonWidthLayout}
      >
         <Animated.View     
					style={[{ transform: [                        // `transform` is an ordered array
            {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
          ]}, styles.shadowBox]}
					>
            <Animated.View style={[styles.bgFill, this.getProgressStyles()]}/>
            <Image style={{marginTop: 10, width: 177, height: 130}}  source={{uri:`${this.props.image}`}}/>
            <Animated.Text style={this.textStyles()}>{this.props.text}</Animated.Text>
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
		shadowRadius: 1,
    backgroundColor: '#FCE4EC'
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0
  },

  text2: {
    fontSize: 20, 
    alignSelf: 'center', 
    backgroundColor: 'transparent',
    color: 'white'  
  }
});
