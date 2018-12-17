import * as React from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import {View} from 'react-native';

export default class MyComponent extends React.Component {
  state = {
    text: ''
  };

  render(){
    return (
      <View>
        <TextInput
          label="Email"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <HelperText
          type="error"
          visible={!this.state.text.includes('@')}
        >
          Email address is invalid!
        </HelperText>
      </View>
    );
  }
}