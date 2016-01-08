import React from 'react-native'
import Square from './square'

const {
  Component,
  Dimensions,
  View
} = React

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class App extends Component {
  render() {
    return (
      <View style={{width: deviceWidth, height: deviceHeight}}>
        <Square/>
      </View>
    );
  }
}

export default App
