/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.ignoredYellowBox = [
    'Setting a timer'
]
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './src/store/configureStore'
import AppWithNavigationState from './src/navigator/AppNavigator';

type Props = {};
export default class App extends Component<Props> {

	constructor(props) {
		super(props);		
	}
	
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
				<AppWithNavigationState />
				</PersistGate>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
