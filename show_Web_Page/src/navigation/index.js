import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  stackHeaderNavigationOptions,
} from 'react-navigation';
import Home from '../components/home';
import WebViewPage from '../components/screens/webViewPage';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { title: 'HOME' },
    },
    WebViewPage: {
      screen: WebViewPage,
      navigationOptions: { title: 'Página' },

    }

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#482880',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainerNavigator = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainerNavigator />;
  }
}

