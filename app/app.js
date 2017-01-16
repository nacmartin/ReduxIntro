
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './styles';
import Counter from './components/Counter';
import Multiplier from './components/Multiplier';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './reducer';
//import devToolsEnhancer from 'remote-redux-devtools';

//let store = createStore(counterReducer, devToolsEnhancer());
let store = createStore(counterReducer);

export default class CounterApp  extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Counter/>
                    <Multiplier/>
                </View>
            </Provider>
        );
    }
}

