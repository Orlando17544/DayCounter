/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { storageOnboarding } from './src/storage/storage.js';

import OnBoardingScreen from './src/views/screens/OnBoardingScreen.js';
import HomeScreen from './src/views/screens/HomeScreen.js';

export default function App() {
	return (
		<NavigationContainer>
		<Stack.Navigator 
		initialRouteName={storageOnboarding.getAllKeys().length == 0 ? "OnBoarding" : "Home"} 
		screenOptions={{headerShown: false}}>
		<Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
		<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	);
}
