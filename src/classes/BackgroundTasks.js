import NetInfo from "@react-native-community/netinfo";
import notifee, { EventType } from '@notifee/react-native';
import Geolocation from 'react-native-geolocation-service';
const axios = require('axios').default;

import Countries from './Countries.js';
import UserData from './UserData.js';

import { DAYS_LEFT_YEAR_NOTIFY, API_KEY_here } from './../constants/constants.js'

import { storageUser, storagePositions, storageNotifications } from './../storage/storage.js';

class BackgroundTasks {
	constructor() {
		this.countries = new Countries();	
		this.userData = new UserData();
	}
	
	//Display the notification (background or foreground)
	async displayNotification() {
		const daysLeftYear = await this.getDaysLeftYear();

		const goals = await this.userData.getGoals();
		const latest = await this.userData.getLatest();

		if (daysLeftYear > DAYS_LEFT_YEAR_NOTIFY) {
			return;
		}

		let bodyText = '';

		if (goals.length > 1) {
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y te falta pasar:';

			goals.forEach(goal => {
				const daysLeft = goal.maximumDays - goal.days;
				bodyText = bodyText + '\n' + '- ' + daysLeft + ' días en ' + this.countries.getName(goal.countryCode);
			});

		} else if (goals.length == 1) {
			const daysLeft = goals[0].maximumDays - goals[0].days;
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y te falta pasar ' + daysLeft + ' días en ' + this.countries.getName(goals[0].countryCode);
		} else if (goals.length == 0) {
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y no has establecido ningún objetivo';
		}

		// Request permissions (required for iOS)
		await notifee.requestPermission()

		// Create a channel (required for Android)
		const channelId = await notifee.createChannel({
			id: 'default',
			name: 'Default Channel',
			sound: 'default', // Default sound for Android
		});

		// Display a notification
		await notifee.displayNotification({
			id: latest.countryCode,
			title: '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año',
			body: bodyText,
			android: {
				channelId,
				smallIcon: 'ic_small_icon', // optional, defaults to 'ic_launcher'.
				color: '#df3500',
				// pressAction is needed if you want the notification to open the app when pressed
				pressAction: {
					id: 'default',
				},
			},
			ios: {
				sound: 'default', // Default sound for iOS
			},
		});
	}

	//Store the position in local memory
	async storePosition() {
		Geolocation.getCurrentPosition(
			(position) => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;

				storagePositions.set(Date.now().toString(), JSON.stringify({latitude: latitude, longitude: longitude}));
			},
			(error) => {
				// See error code charts below.
				console.log(error.code, error.message);
			},
			{ enableHighAccuracy: true, maximumAge: 1, distanceFilter: 1 }
		);
	}
	
	//Update the country of the position and store it in memory
	async updatePositions() {
		const state = await NetInfo.fetch();
		let millisecondsDatesKeys = storagePositions.getAllKeys();

		if (!state.isInternetReachable || millisecondsDatesKeys.length < 2) {
			return;
		}

		let millisecondsDatesKeysIntegers = millisecondsDatesKeys.map(millisecondsDateKey => {
			return parseInt(millisecondsDateKey, 10);
		});

		// Ascending order
		millisecondsDatesKeysIntegers.sort(function(a, b){return a-b});

		for (var i = 0; i < millisecondsDatesKeysIntegers.length - 1; i++) {
			const timeElapsedMilliseconds = millisecondsDatesKeysIntegers[i + 1] - millisecondsDatesKeysIntegers[i];
			const timeElapsedDays = timeElapsedMilliseconds * 1.15741 * Math.pow(10, -8);
			const position = JSON.parse(storagePositions.getString(millisecondsDatesKeysIntegers[i].toString()));

			const coordinates = position.latitude + ',' + position.longitude;
			const coordinatesEncoded = encodeURIComponent(coordinates);

			const URL = 'https://revgeocode.search.hereapi.com/v1/revgeocode?' + 'at=' + coordinatesEncoded + '&' + 'lang=en-US' + '&' + 'apiKey=' + API_KEY_here;

			const response = await axios.get(URL);

			const countryCode = response.data.items[0].address.countryCode;

			const userDataItem = JSON.parse(storageUser.getString(countryCode));

			const newDays = userDataItem.days + timeElapsedDays;

			console.log({...userDataItem, days: newDays});
			storageUser.set(countryCode, JSON.stringify({...userDataItem, days: newDays, lastUpdate: Date.now()}));

			storagePositions.delete(millisecondsDatesKeysIntegers[i].toString());
		}
	};

	async getDaysLeftYear() {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const endYear = new Date(currentYear, 11, 31);
		const daysLeftYear = (endYear.getTime() - currentDate.getTime()) * 1.15741 * Math.pow(10, -8);

		return daysLeftYear;
	}
}

export default BackgroundTasks;
