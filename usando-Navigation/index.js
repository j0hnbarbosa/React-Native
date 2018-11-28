/** @format */

import { AppRegistry } from 'react-native';
//import ListaTodosUsuarios from './src/components/listaTodosUsuarios';
import { name as appName } from './app.json';
//import App from './src/testeNavigation/App'
//import MostraInfoUsuario from './src/components/screens/mostraInfoUsuario';
import AppContainerNavigator from './src/navigation';

AppRegistry.registerComponent(appName, () => AppContainerNavigator);
