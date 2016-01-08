import React from 'react-native'

const {
  Animated,
  Component,
  TouchableOpacity
} = React

class Square extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {entrance: new Animated.Value(0)}
    this.reset = this.reset.bind(this)
  }
  componentDidMount() {
    Animated.spring(this.state.entrance, {toValue: 1}).start()
  }
  render () {
    let rotate = this.state.entrance.interpolate({
      inputRange: [0, 1],
      outputRange: ['-90deg', '0deg']
    })
    return (
      <TouchableOpacity onPress={this.reset} style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Animated.View
          style={{width: 200, height: 200, backgroundColor: 'red', transform:[{rotate}]}}/>
      </TouchableOpacity>
    )
  }
  reset() {
    this.setState({
      entrance: new Animated.Value(0)
    })
    Animated.spring(this.state.entrance, {toValue: 1}).start()
  }
}

export default Square
