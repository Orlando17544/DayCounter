/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import notifee, { EventType } from '@notifee/react-native';
import BackgroundFetch from "react-native-background-fetch";

import { storageUser, storageNotifications } from './src/storage/storage.js';

import BackgroundTasks from './src/classes/BackgroundTasks.js';
import Countries from './src/classes/Countries.js';

if (storageUser.getAllKeys().length == 0) {
	const countries = new Countries();

	countries.getCountriesData().forEach(item => {
		storageUser.set(item.code, JSON.stringify({countryCode: item.code, days: 0, maximumDays: 0, lastUpdate: Date.now()})); 
	});
}

// Background events of notifications
notifee.onBackgroundEvent(async ({ type, detail }) => {
	if (type == EventType.PRESS) {
		storageNotifications.set('notification', detail.notification.id);

		// Remove the notification
		await notifee.cancelNotification(detail.notification.id);
	}
});

AppRegistry.registerComponent(appName, () => App);

// To store positions when the app is finished
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

	const backgroundTasks = new BackgroundTasks();	

	await backgroundTasks.storePosition();
	await backgroundTasks.updatePositions();
	await backgroundTasks.displayNotification();

	// Required:  Signal to native code that your task is complete.
	// If you don't do this, your app could be terminated and/or assigned
	// battery-blame for consuming too much time in background.
	BackgroundFetch.finish(taskId);
}

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(MyHeadlessTask);
