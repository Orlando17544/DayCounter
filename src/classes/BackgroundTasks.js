import NetInfo from "@react-native-community/netinfo";
import notifee, { EventType, AndroidStyle } from '@notifee/react-native';
import Geolocation from 'react-native-geolocation-service';
const axios = require('axios').default;

import Countries from './Countries.js';
import UserData from './UserData.js';

import { DAYS_LEFT_YEAR_NOTIFY, API_KEY_here, FRECUENCY_HOURS } from './../constants/constants.js'

import { storageUser, storagePositions, storageNotifications } from './../storage/storage.js';

class BackgroundTasks {
	static executingStorePosition = false;
	static executingUpdatePositions = false;
	static executingDisplayNotification = false;

	//Store the position in local memory
	static async storePosition(backgroundClass, ...arrayFn) {
		if (this.executingStorePosition) {
			return;
		}

		this.executingStorePosition = true;

		console.log('storePosition started');

		async function getPosition(position) {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;

			console.log('New position: ' + latitude + ', ' + longitude);

			storagePositions.set(Date.now().toString(), JSON.stringify({latitude: latitude, longitude: longitude}));

			this.executingStorePosition = false;

			console.log('storePosition finished');

			//functions to execute after get the new position
			if (arrayFn.length > 0) {
				for (const fn of arrayFn) {
					if (backgroundClass.hasOwnProperty(fn.name)) {
						await fn.call(backgroundClass);
					} else {
						fn();
					}
				}
			}
		}

		async function getError(error) {
			this.executingStorePosition = false;
			// See error code charts below.
			console.log(error.code, error.message);
			
			//functions to execute after get the new position
			if (arrayFn.length > 0) {
				for (const fn of arrayFn) {
					if (backgroundClass.hasOwnProperty(fn.name)) {
						await fn.call(backgroundClass);
					} else {
						fn();
					}
				}
			}
		}

		const getPositionBound = getPosition.bind(this);
		const getErrorBound = getError.bind(this);

		Geolocation.getCurrentPosition(
			getPositionBound, 
			getErrorBound, 
			{ timeout: (FRECUENCY_HOURS / 4) * 3.6 * Math.pow(10, 6), accuracy: {android: 'low', ios: 'threeKilometers'}, maximumAge: 1, distanceFilter: 1 }
		);
	}

	//Update the country of the position and store it in memory
	static async updatePositions() {
		if (this.executingUpdatePositions) {
			return;
		}

		this.executingUpdatePositions = true;

		console.log('updatePositions started');

		const state = await NetInfo.fetch();
		let millisecondsDatesKeys = storagePositions.getAllKeys();

		if (!state.isInternetReachable || millisecondsDatesKeys.length < 2) {
			this.executingUpdatePositions = false;
			console.log('updatePositions did not meet the requirements');
			return;
		}

		let millisecondsDatesKeysIntegers = millisecondsDatesKeys.map(millisecondsDateKey => {
			return parseInt(millisecondsDateKey, 10);
		});

		// Ascending order
		millisecondsDatesKeysIntegers.sort(function(a, b){return a-b});

		console.log('Milliseconds to update: ' + millisecondsDatesKeysIntegers);

		for (var i = 0; i < millisecondsDatesKeysIntegers.length - 1; i++) {
			const timeElapsedMilliseconds = millisecondsDatesKeysIntegers[i + 1] - millisecondsDatesKeysIntegers[i];
			const timeElapsedDays = timeElapsedMilliseconds * 1.15741 * Math.pow(10, -8);
			const position = JSON.parse(storagePositions.getString(millisecondsDatesKeysIntegers[i].toString()));

			const coordinates = position.latitude + ',' + position.longitude;
			const coordinatesEncoded = encodeURIComponent(coordinates);

			const URL = 'https://revgeocode.search.hereapi.com/v1/revgeocode?' + 'at=' + coordinatesEncoded + '&' + 'lang=en-US' + '&' + 'apiKey=' + API_KEY_here;
			try {
				const response = await axios.get(URL);

				const countryCode = response.data.items[0].address.countryCode;

				const userDataItem = JSON.parse(storageUser.getString(countryCode));

				const newDays = userDataItem.days + timeElapsedDays;

				console.log({...userDataItem, days: newDays});
				storageUser.set(countryCode, JSON.stringify({...userDataItem, days: newDays, lastUpdate: Date.now()}));

				storagePositions.delete(millisecondsDatesKeysIntegers[i].toString());
			} catch (error) {
				this.executingUpdatePositions = false;  
				console.error(error);
				return;
			}
		}

		this.executingUpdatePositions = false;  

		console.log('updatePositions finished');
	};

	//Display the notification (background or foreground)
	static async displayNotification() {
		if (this.executingDisplayNotification) {
			return;
		}

		this.executingDisplayNotification = true;

		console.log('displayNotification started');

		const daysLeftYear = this.getDaysLeftYear();

		const goals = UserData.getGoals();
		const latest = UserData.getLatest();

		if (daysLeftYear > DAYS_LEFT_YEAR_NOTIFY) {
			this.executingDisplayNotification = false;  
			console.log('displayNotification did not meet the requirements');
			return;
		}

		let bodyText = '';

		if (goals.length > 1) {
			bodyText = '<p>Te falta pasar:';

			goals.forEach(goal => {
				const daysLeft = goal.maximumDays - goal.days;
				bodyText = bodyText + '<br>' + '- ' + daysLeft + ' días en ' + Countries.getName(goal.countryCode);
			});

			bodyText = bodyText + '</p>';

		} else if (goals.length == 1) {
			const daysLeft = goals[0].maximumDays - goals[0].days;
			bodyText = '<p>Te falta pasar ' + daysLeft + ' días en ' + Countries.getName(goals[0].countryCode) + '</p>';
		} else if (goals.length == 0) {
			bodyText = '<p>No has establecido ningún objetivo</p>';
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
			title: '<p><b>¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año</b></p>',
			body: bodyText,
			android: {
				channelId,
				smallIcon: 'ic_small_icon', // optional, defaults to 'ic_launcher'.
				color: '#df3500',
				// pressAction is needed if you want the notification to open the app when pressed
				pressAction: {
					id: 'default',
				},
				style: { type: AndroidStyle.BIGTEXT, text: bodyText }
			},
			ios: {
				sound: 'default', // Default sound for iOS
			},
		});

		console.log('Id of notification: ' + latest.countryCode);

		this.executingDisplayNotification = false;

		console.log('displayNotification finished');
	}

	static getDaysLeftYear() {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const endYear = new Date(currentYear, 11, 31);
		const daysLeftYear = (endYear.getTime() - currentDate.getTime()) * 1.15741 * Math.pow(10, -8);

		return daysLeftYear;
	}
}

export default BackgroundTasks;
