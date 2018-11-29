import React, { Component } from 'react';
import { WebView, View } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.reddit.com/r/pokemon/'}}
        style={{marginTop: 20}}
        
      />
    );
  }
}
export default MyWeb;