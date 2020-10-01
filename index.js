/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
//import App from './plant-app/App';
import {name as appName} from './app.json';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));

//AppRegistry.registerComponent(appName, () => App);
