
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Register extends Component {
  render() {
    const { sText, sButton, sContainer } = styles;
    return (
      <View style={sContainer}>
        <Text style={sText}>
          Rejestracja
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed');
            this.props.setToReg({phone: '123 456 678', token: '2345678998756538123'})
          }}
        >
          <Text style={sText}>Click</Text>
        </TouchableOpacity>
        <Text style={sText}>
          {this.props.phone}
        </Text>
        <Text style={sText}>
          {this.props.token}
        </Text>
      </View>
    );
  }
}

const styles = {
  sContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sText: {
    fontSize: 24,
    margin: 10,
    textAlign: 'center'
  },
  sButton: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 15
  }
};

export default Register;
