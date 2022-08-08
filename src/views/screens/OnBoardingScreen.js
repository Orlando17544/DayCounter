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

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

import { storageOnboarding } from './../../../App.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
	{image: require('./../../../assets/tutorial1.png')},
	{image: require('./../../../assets/tutorial2.png')},
	{image: require('./../../../assets/tutorial3.png')},
	{image: require('./../../../assets/tutorial4.png')},
	{image: require('./../../../assets/tutorial5.png')},
];

const OnBoardingScreen: () => Node = ({ navigation }) => {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const fadeAnim2 = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 5000
		}).start();
	};



	return (
		<AnimatedPagerView style={{flex: 1}} initialPage={0} onPageScroll={Animated.event(
			[
				{
					nativeEvent: {
						offset: fadeAnim,
						position: fadeAnim2
					},
				},
			],
			{
				listener: ({ nativeEvent: { offset, position } }) => {
					console.log(`Position: ${position} Offset: ${offset}`);
				},
				useNativeDriver: true,
			}
		)}>
		{data.map((item, index) => (
			<View style={{flex: 1}} key={index} collapsable={false}>
			<ImageBackground style={{width: windowWidth, height: windowHeight, justifyContent: 'flex-end', alignItems: 'center'}} resizeMode='stretch' source={item.image}>
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: windowWidth * 0.15}}>
			<View style={{width: windowWidth * 0.05, height: windowWidth * 0.05, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5}}/>
			<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
			<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
			<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
			<View style={{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}}/>
			</View>
			</ImageBackground>
			</View>
		))}
		</AnimatedPagerView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default OnBoardingScreen;
