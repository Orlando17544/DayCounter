import Countries from './Countries.js';
import { storageUser } from './../storage/storage.js';

class UserData {
	static getLatest() {
		let latest = 0;
		let item;

		Countries.getCountriesData().forEach(element => {
			const userDataItem = JSON.parse(storageUser.getString(element.code));

			if (latest < userDataItem.lastUpdate) {
				latest = userDataItem.lastUpdate;
				item = userDataItem;
			}
		});
		
		return item;
	}

	static getGoals() {
		let goals = [];
		Countries.getCountriesData().forEach(item => {
			const userDataItem = JSON.parse(storageUser.getString(item.code));
			
			if (userDataItem.maximumDays > 0) {
				goals.push(userDataItem);
			}
		});
		
		return goals;
	}
}

export default UserData;
