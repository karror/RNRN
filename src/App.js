
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { Register } from './components/register'
import Stack from './Stack';
//import { ... } from './components/modals';
import rootReducer from './reducers';
import { colors } from 'statics';


const store = createStore(rootReducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: colors.color1c }}>
          <Stack />
        </View>
      </Provider>
    );
  }
}


export default App;
