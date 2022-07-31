/**
 * @format
 */

import {AppRegistry} from 'react-native';
import notifee, { EventType } from '@notifee/react-native';
import App from './App';
import {name as appName} from './app.json';
import { MMKV } from 'react-native-mmkv';

export const storageNotifications = new MMKV({
	id: `user-notifications-storage`
})

notifee.onBackgroundEvent(async ({ type, detail }) => {
	if (type == EventType.PRESS) {
		storageNotifications.set('notification', detail.notification.id);
		
		// Remove the notification
		await notifee.cancelNotification(detail.notification.id);
	}
});

AppRegistry.registerComponent(appName, () => App);
