
import React from 'react';
import { Register } from '../components/register';

class register extends React.Component {
  static navigationOptions = {
    headerTitle: 'Rejestracja'
  };

  render() {
    console.log(Register)
    return <Register/>;
  }
}

export { register };
