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

import { MMKV } from 'react-native-mmkv';

export const storageOnboarding = new MMKV({
	id: `user-userOnboarding-storage`
})

import OnBoardingScreen from './src/views/screens/OnBoardingScreen.js';
import HomeScreen from './src/views/screens/HomeScreen.js';

export default function App() {
	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName={storageOnboarding.getAllKeys().length == 0 ? "OnBoarding" : "Home"}>
		<Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
		<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	);
}
