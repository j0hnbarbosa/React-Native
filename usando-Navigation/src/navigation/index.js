import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  stackHeaderNavigationOptions,
} from 'react-navigation';
import MostraInfoUsuaurio from '../components/screens/mostraInfoUsuario';
import ListaTodosUsuarios from '../components/listaTodosUsuarios';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: ListaTodosUsuarios,
      
    },
    MostraInfoUsuaurio: {
      screen: MostraInfoUsuaurio,
      
    }

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
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

