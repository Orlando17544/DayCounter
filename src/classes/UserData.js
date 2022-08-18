import { storageUser } from './../storage/storage.js';

class UserData {
	constructor() {
		this.countryCodes = storageUser.getAllKeys();
	} 

	async getLatest() {
		let latest = 0;
		let item;

		this.countryCodes.forEach(countryCode => {
			const userDataItem = JSON.parse(storageUser.getString(countryCode));

			if (latest < userDataItem.lastUpdate) {
				latest = userDataItem.lastUpdate;
				item = userDataItem;
			}
		});
		
		return item;
	}

	async getGoals() {
		let goals = [];
		this.countryCodes.forEach(countryCode => {
			const userDataItem = JSON.parse(storageUser.getString(countryCode));
			
			if (userDataItem.maximumDays > 0) {
				goals.push(userDataItem);
			}
		});
		
		return goals;
	}
}

export default UserData;
