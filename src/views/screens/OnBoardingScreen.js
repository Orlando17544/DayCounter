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
	Image,
	PermissionsAndroid,
} from 'react-native';

import { MMKV } from 'react-native-mmkv';
import PagerView from 'react-native-pager-view';
import Geolocation from 'react-native-geolocation-service';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

import { storageOnboarding } from './../../storage/storage.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const images = [
	{imageUri: require('./../../../assets/tutorial1.png')},
	{imageUri: require('./../../../assets/tutorial2.png')},
	{imageUri: require('./../../../assets/tutorial3.png')},
	{imageUri: require('./../../../assets/tutorial4.png')},
	{imageUri: require('./../../../assets/tutorial5.png')},
];

const OnBoardingScreen: () => Node = ({ navigation }) => {
	const [isLastPage, setIsLastPage] = useState(false);

	useEffect(() => {
		async function askPermissionsAndroid() {
			try {
				let permissionFineLocation = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
				let permissionCoarseLocation = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
				let permissionBackgroundLocation = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION);

				if (!permissionFineLocation || !permissionCoarseLocation || ! permissionBackgroundLocation) {
					PermissionsAndroid.requestMultiple([
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 
						PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, 
						PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
					]);
				}
			} catch(error) {
				console.log(error);
			}
		}

		async function askPermissionsiOS() {
			const statusAuthorization = await Geolocation.requestAuthorization('always');
			console.log(statusAuthorization);
		}

		if (Platform.OS === 'ios') {
			askPermissionsiOS();
		} else {
			askPermissionsAndroid();
		}
	}, [])

	const offset = useRef(new Animated.Value(0)).current;
	const position = useRef(new Animated.Value(0)).current;

	return (
		<View style={{flex: 1, justifyContent: 'flex-end'}}>
		<AnimatedPagerView style={{flex: 1}} initialPage={0} onPageScroll={Animated.event(
			[
				{
					nativeEvent: {
						offset: offset,
						position: position
					},
				},
			],
			{
				listener: ({ nativeEvent: { offset, position } }) => {
					console.log(`Position: ${position} Offset: ${offset}`);
					if (position == images.length - 1 && !isLastPage) {
						setIsLastPage(true);
					} else if (isLastPage) {
						setIsLastPage(false);
					}
				},
				useNativeDriver: true,
			}
		)}>
		{images.map((image, index) => (
			<View style={{flex: 1}} key={index} collapsable={false}>
			<Image style={{width: windowWidth, height: windowHeight, justifyContent: 'flex-end', alignItems: 'center'}} resizeMode='stretch' source={image.imageUri}>
			</Image>
			</View>
		))}
		</AnimatedPagerView>
		{isLastPage ? 
		<TouchableOpacity style={{position: 'absolute', backgroundColor: '#1e2818', paddingVertical: 10, paddingHorizontal: windowWidth * 0.1, borderRadius: 5, bottom: windowWidth * 0.1, alignSelf: 'center'}} onPress={() => {storageOnboarding.set('isFirstTime', true); navigation.navigate('Home');}}>
		<Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Empezar</Text>
		</TouchableOpacity>
			: null
		}
		<View style={{position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingBottom: windowWidth * 0.015}}>
		{images.map((image, index) => (
			<Animated.View key={index} style={[{width: windowWidth * 0.04, height: windowWidth * 0.04, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5, opacity: 0.5}, {transform: [{scale: Animated.add(position, offset).interpolate({
				inputRange: index == 0 ? [index, index + 1] : [index - 1, index, index + 1], 
				outputRange: index == 0 ? [1.25, 1] : [1, 1.25, 1], 
				extrapolate: 'clamp'
			})
			}], opacity: Animated.add(position, offset).interpolate({
				inputRange: index == 0 ? [index, index + 1] : [index - 1, index, index + 1], 
				outputRange: index == 0 ? [1, 0.5] : [0.5, 1, 0.5], 
				extrapolate: 'clamp'
			})
			}]
			}/>
		))}
		</View>
		</View>
	);
};

//<View style={{width: windowWidth * 0.05, height: windowWidth * 0.05, backgroundColor: '#1e2818', borderRadius: windowWidth * 0.04, marginHorizontal: 5}}/>
/*offset.interpolate({
		})
		*/
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default OnBoardingScreen;
