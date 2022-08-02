/**
 * @format
 */

import {AppRegistry} from 'react-native';
import notifee, { EventType } from '@notifee/react-native';
import App from './App';
import {name as appName} from './app.json';
import { MMKV } from 'react-native-mmkv';
import BackgroundFetch from "react-native-background-fetch";
import Geolocation from 'react-native-geolocation-service';
import { storagePositions } from './App.js';

export const storageNotifications = new MMKV({
	id: `user-notifications-storage`
})

// Background events of notifications
notifee.onBackgroundEvent(async ({ type, detail }) => {
	if (type == EventType.PRESS) {
		storageNotifications.set('notification', detail.notification.id);

		// Remove the notification
		await notifee.cancelNotification(detail.notification.id);
	}
});

// To store positions in background
let MyHeadlessTask = async (event) => {
	// Get task id from event {}:
	let taskId = event.taskId;
	let isTimeout = event.timeout;  // <-- true when your background-time has expired.
	if (isTimeout) {
		// This task has exceeded its allowed running-time.
		// You must stop what you're doing immediately finish(taskId)
		console.log('[BackgroundFetch] Headless TIMEOUT:', taskId);
		BackgroundFetch.finish(taskId);
		return;
	}
	console.log('[BackgroundFetch HeadlessTask] start: ', taskId);

	async function storeData(latitude, longitude, millisecondsDate) {
		storagePositions.set(millisecondsDate.toString(), JSON.stringify({latitude: latitude, longitude: longitude}));
	}
	//For current location
	Geolocation.getCurrentPosition(
		(position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;

			storeData(latitude, longitude, Date.now());
		},
		(error) => {
			// See error code charts below.
			console.log(error.code, error.message);
		},
		{ enableHighAccuracy: true, maximumAge: 1, distanceFilter: 1 }
	);
	// Required:  Signal to native code that your task is complete.
	// If you don't do this, your app could be terminated and/or assigned
	// battery-blame for consuming too much time in background.
	BackgroundFetch.finish(taskId);
}

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(MyHeadlessTask);

AppRegistry.registerComponent(appName, () => App);
