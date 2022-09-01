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
	Modal,
	TextInput,
	Animated,
	Image,
	Alert,
	FlatList,
	Platform,
	AppState,
	Dimensions,
	ImageBackground
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import BackgroundFetch from 'react-native-background-fetch';
import NetInfo from "@react-native-community/netinfo";
import notifee, { EventType } from '@notifee/react-native';

import { storageUser, storagePositions, storageNotifications } from './../../storage/storage.js';

import { FRECUENCY_HOURS } from './../../constants/constants.js'

import BackgroundTasks from './../../classes/BackgroundTasks.js';
import Countries from './../../classes/Countries.js';
import UserData from './../../classes/UserData.js';

const HomeScreen: () => Node = () => {
	const [userData, setUserData] = useState(() => {
		const latest = UserData.getLatest();

		return {...latest, days: Math.round(latest.days)};
	});
	const [modalVisibleCountries, setModalVisibleCountries] = useState(false);

	let timeoutId;

	// Store one position at the beginning
	useEffect(() => {
		if (storagePositions.getAllKeys().length == 0) {
			BackgroundTasks.storePosition();
		}
	}, []);

	async function initBackgroundTasks() {
		let millisecondsDatesKeys = storagePositions.getAllKeys();
		let millisecondsNow = Date.now();

		let millisecondsDatesKeysIntegers = millisecondsDatesKeys.map(millisecondsDateKey => {
			return parseInt(millisecondsDateKey, 10);
		});

		// Ascending order
		millisecondsDatesKeysIntegers.sort(function(a, b){return a-b});

		let millisecondsRecent = millisecondsDatesKeysIntegers[millisecondsDatesKeysIntegers.length - 1];

		const hoursElapsed = (millisecondsNow - millisecondsRecent) * 2.77778 * Math.pow(10, -7);

		if (hoursElapsed >= FRECUENCY_HOURS) {
			await BackgroundTasks.storePosition(
				BackgroundTasks,
				BackgroundTasks.updatePositions, 
				updateForeground
			);
			
			//If this function is added to storePosition parameters, does not work in release mode
			await BackgroundTasks.displayNotification();
		} else {
			await BackgroundTasks.updatePositions();
			await BackgroundTasks.displayNotification();

			updateForeground();
		}
	}

	// Activates when internet is on to update data
	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			if (state.isInternetReachable) {
				console.log('internet is on');
				clearTimeout(timeoutId);
				timeoutId = setTimeout(initBackgroundTasks, 10000);
			} else {
				console.log('internet is off');
				clearTimeout(timeoutId);
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	// Foreground events of notifications
	useEffect(() => {
		return notifee.onForegroundEvent(({ type, detail }) => {
			switch (type) {
				case EventType.PRESS:
					const userDataItem = JSON.parse(storageUser.getString(detail.notification.id));

					setUserData({...userDataItem, days: Math.round(userDataItem.days)});
			}
		});
	}, []);

	// Background events of notifications
	const appState = useRef(AppState.currentState);
	const [appStateVisible, setAppStateVisible] = useState(appState.current);

	useEffect(() => {
		const subscription = AppState.addEventListener("change", nextAppState => {
			if (appState.current.match(/inactive|background/) && nextAppState === "active") {
				console.log("App has come to the foreground!");
				if (storageNotifications.contains('notification')) {
					const countryCodeNotification = storageNotifications.getString('notification');
					const userDataItem = JSON.parse(storageUser.getString(countryCodeNotification));
					setUserData({...userDataItem, days: Math.round(userDataItem.days)});
					storageNotifications.delete('notification');	
				} else {
					const latest = UserData.getLatest();

					setUserData({...latest, days: Math.round(latest.days)});
				}
			}

			appState.current = nextAppState;
			setAppStateVisible(appState.current);
			console.log("AppState", appState.current);
		});

		return () => {
			subscription.remove();
		};
	}, []);

	function updateForeground() {
		const lastUserData = UserData.getLatest();

		setUserData({...lastUserData, days: Math.round(lastUserData.days)});
		load(lastUserData.days, lastUserData.maximumDays);
	}

	// Background task
	async function backgroundTask() {
		await BackgroundTasks.storePosition(
			BackgroundTasks,
			BackgroundTasks.updatePositions, 
			updateForeground
		);
		
		//If this function is added to storePosition parameters, does not work in release mode
		await BackgroundTasks.displayNotification();
	}

	// Background tasks
	useEffect(() => {
		async function initBackgroundFetch() {
			const onEvent = async (taskId) => {
				console.log('[BackgroundFetch] task: ', taskId);
				// Do your background work...

				await backgroundTask();	

				// IMPORTANT:  You must signal to the OS that your task is complete.
				BackgroundFetch.finish(taskId);
			}

			const onTimeout = async (taskId) => {
				console.warn('[BackgroundFetch] TIMEOUT task: ', taskId);
				BackgroundFetch.finish(taskId);
			}

			let status = await BackgroundFetch.configure({minimumFetchInterval: FRECUENCY_HOURS * 60, stopOnTerminate: false, forceAlarmManager: false, enableHeadless: true}, onEvent, onTimeout);

			if (status == 0) {
				console.log("Restricted");
			} else if (status == 1) {
				console.log("Denied");
			} else if (status == 2) {
				console.log("Available");
			}
		}

		initBackgroundFetch();

	}, []);

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
	};

	const isDarkMode = useColorScheme() === 'dark';

	// Animations
	const loaderValue = useRef(new Animated.Value(0)).current;

	const load = (days, maximumDays) => {
		Animated.timing(loaderValue, {
			toValue: isFinite(Math.round(days * 100 / maximumDays)) ? Math.round(days * 100 / maximumDays) : 0,
			duration: 1000,
			useNativeDriver: false
		}).start();
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity key={item.code} style={{paddingBottom: 8}} onPress={() => {
			const userDataItem = JSON.parse(storageUser.getString(item.code)); 
			setUserData({...userDataItem, days: Math.round(userDataItem.days)});
			setModalVisibleCountries(false); 
			load(JSON.parse(storageUser.getString(item.code)).days, JSON.parse(storageUser.getString(item.code)).maximumDays);
		}}>
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
		<Image style={styles.flag} source={item.source}/>
		<Text style={{color: '#2c2c2c', fontSize: 15, marginLeft: 15}}>{item.name}</Text>
		</View>
		</TouchableOpacity>
	);

	return (
		<LinearGradient style={styles.container} colors={['#1e2818', '#020304']}>
		<SafeAreaView>
		<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
		<View style={{alignItems: 'center'}}>
		<Text style={styles.text}>Tus días en </Text>
		<TouchableOpacity onPress={() => {setModalVisibleCountries(true);}}>
		<Text style={[styles.text, {fontWeight: 'bold'} ]}>{Countries.getName(userData.countryCode)}</Text>
		</TouchableOpacity>
		<Modal
		visible={modalVisibleCountries}
		transparent={true}
		animationType='fade'
		onRequestClose={() => {setModalVisibleCountries(false);}}
		>
		<View style={{flex: 1, marginVertical: 15, marginHorizontal: 15, backgroundColor: 'white', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 15}}>
		<FlatList
		data={Countries.getCountriesData()}
		renderItem={renderItem}
		keyExtractor={item => item.code}
		initialNumToRender={50}
		maxToRenderPerBatch={50}
		/>
		</View>
		</Modal>
		<Image style={styles.flag} source={Countries.getSource(userData.countryCode)}/>
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
		<Text style={styles.text}>{userData.days.toString()}/</Text>
		<TextInput
		style={[styles.text, {fontWeight: 'bold'} ]}
		value={userData.maximumDays.toString()}
		onChangeText={newMaximumDays => {
			const regex = /[^\d]/g;

			if (newMaximumDays == '') {
				newMaximumDays = '0';
			} else if (regex.test(newMaximumDays)) {
				newMaximumDays = newMaximumDays.replace(regex, '');
			}

			newMaximumDays = parseInt(newMaximumDays);

			storageUser.set(userData.countryCode, JSON.stringify({...userData, maximumDays: newMaximumDays})); 
			setUserData({...userData, days: Math.round(userData.days), maximumDays: newMaximumDays});
			load(userData.days, newMaximumDays);
		}}
		keyboardType={'number-pad'}
		/>
		</View>
		<View>
		<Text style={[styles.text, {fontSize: 15} ]}>{isFinite(Math.round(userData.days * 100 / userData.maximumDays)) ? Math.round(userData.days * 100 / userData.maximumDays) : 0}%</Text>
		<View style={styles.progressBar}>
		<Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: '#8BED4F', width: loaderValue.interpolate({inputRange: [0,100], outputRange: ['0%','100%'], extrapolate: 'clamp'})}}/>
		</View>
		</View>
		</View>
		</SafeAreaView>
		</LinearGradient>
	);

};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: '#eeefef', 
		fontSize: 25
	},
	flag: {
		width: 50, 
		height: 50, 
		borderRadius: 25, 
		borderColor: '#000000', 
		borderWidth: 0.5	
	},
	progressBar: {
		height: 20,
		width: 200,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 5
	}
});

export default HomeScreen;
