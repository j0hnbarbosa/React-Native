import React from 'react';
import { WebView } from 'react-native';

const WebViewPage = (props) => {
  const uriReddit = 'https://www.reddit.com';
  return (
    <WebView
      source={{ uri: `${uriReddit}/${props.navigation.getParam("URL", "")}` }}
      style={{ marginTop: 20 }}

    />
  );

}

export default WebViewPage;