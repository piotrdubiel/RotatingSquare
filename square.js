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
    let opacity = this.state.entrance;
    let rotate = this.state.entrance.interpolate({
      inputRange: [0, 1],
      outputRange: ['-180deg', '0deg']
    })
    return (
      <TouchableOpacity onPress={this.reset}>
        <Animated.View
          style={{width: 200, height: 200, backgroundColor: 'red', opacity, transform:[{rotate}]}}/>
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
