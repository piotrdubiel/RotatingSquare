import React from 'react-native'
import Square from './square'

const {
  Component,
  View
} = React

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Square/>
      </View>
    );
  }
}

export default App
