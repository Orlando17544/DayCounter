/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { MMKV } from 'react-native-mmkv';
import notifee, { EventType } from '@notifee/react-native';
import BackgroundFetch from "react-native-background-fetch";

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

	await App.backgroundTask();

	// Required:  Signal to native code that your task is complete.
	// If you don't do this, your app could be terminated and/or assigned
	// battery-blame for consuming too much time in background.
	BackgroundFetch.finish(taskId);
}

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(MyHeadlessTask);
