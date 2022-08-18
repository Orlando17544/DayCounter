import { MMKV } from 'react-native-mmkv';

export const storageUser = new MMKV({
	id: `user-storage`
})

export const storagePositions = new MMKV({
	id: `positions-storage`
})

export const storageNotifications = new MMKV({
	id: `notifications-storage`
})
