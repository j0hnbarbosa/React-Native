/** @format */

/* 
https://www.reddit.com/subreddits/default.json
https://www.reddit.com/r/aww/hot.json
*/

import { AppRegistry } from 'react-native';
import test from './src/test';
import { name as appName } from './app.json';
import Home from './src/components/home';
import Root from './src/navigation'

AppRegistry.registerComponent(appName, () => Root);
