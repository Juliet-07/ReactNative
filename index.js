/**
 * @format
 */
// in order to use jsx
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Renew from './Firstapp'
import {Provider} from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()
const RNRedux =  (
    <Provider store={store}>
        <Renew/>
    </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);
