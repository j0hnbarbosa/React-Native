import React, { Component } from 'react';
import { WebView, View } from 'react-native';

class WebViewPage extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://www.reddit.com/r/reactnative' }}
        style={{ marginTop: 20 }}

      />
    );
  }
}
export default WebViewPage;