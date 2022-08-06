/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useRef } from 'react';
import type {Node} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	TouchableOpacity,
	Animated,
	Dimensions,
	ImageBackground
} from 'react-native';

import { MMKV } from 'react-native-mmkv';
import PagerView from 'react-native-pager-view';

import { storageOnboarding } from './../../../App.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OnBoardingScreen: () => Node = ({ navigation }) => {
	return (
		<PagerView style={{flex: 1}} initialPage={0}>
		<View style={{flex: 1}} key="1" collapsable={false}>
		<ImageBackground style={{width: windowWidth, height: windowHeight, justifyContent: 'flex-end', alignItems: 'center'}} resizeMode='stretch' source={require('./../../../assets/tutorial1.png')}>
		<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: windowWidth * 0.15}}>
		<View style={{width: windowWidth * 0.05, height: windowWidth * 0.05, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		</View>
		</ImageBackground>
		</View>
		<View style={{flex: 1}} key="2" collapsable={false}>
		<ImageBackground style={{width: windowWidth, height: windowHeight, justifyContent: 'flex-end', alignItems: 'center'}} resizeMode='stretch' source={require('./../../../assets/tutorial2.png')}>
		<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: windowWidth * 0.15}}>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.05, height: windowWidth * 0.05, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		</View>
		</ImageBackground>
		</View>
		<View style={{flex: 1}} key="3" collapsable={false}>
		<ImageBackground style={{width: windowWidth, height: windowHeight, justifyContent: 'flex-end', alignItems: 'center'}} resizeMode='stretch' source={require('./../../../assets/tutorial3.png')}>
		<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: windowWidth * 0.15}}>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.05, height: windowWidth * 0.05, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		</View>
		</ImageBackground>
		</View>
		<View style={{flex: 1}} key="4" collapsable={false}>
		<ImageBackground style={{width: windowWidth, height: windowHeight, justifyContent: 'flex-end', alignItems: 'center'}} resizeMode='stretch' source={require('./../../../assets/tutorial4.png')}>
		<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: windowWidth * 0.15}}>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		<View style={{width: windowWidth * 0.05, height: windowWidth * 0.05, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5}}/>
		<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
		</View>
		</ImageBackground>
		</View>
		<View style={{flex: 1}} key="5" collapsable={false}>
		<ImageBackground style={{width: windowWidth, height: windowHeight, justifyContent: 'flex-end', alignItems: 'center'}} resizeMode='stretch' source={require('./../../../assets/tutorial5.png')}>
		<TouchableOpacity style={{backgroundColor: '#1e2818', paddingVertical: 10, paddingHorizontal: windowWidth * 0.1, borderRadius: 5, marginBottom: windowWidth * 0.15}} onPress={() => {storageOnboarding.set('isFirstTime', true); navigation.navigate('Home');}}>
		<Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Empezar</Text>
		</TouchableOpacity>
		</ImageBackground>
		</View>
		</PagerView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default OnBoardingScreen;
