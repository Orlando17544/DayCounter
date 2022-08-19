import Countries from './Countries.js';
import { storageUser } from './../storage/storage.js';

class UserData {
	constructor() {
		this.countries = new Countries();
	}

	async getLatest() {
		let latest = 0;
		let item;

		this.countries.getCountriesData().forEach(element => {
			const userDataItem = JSON.parse(storageUser.getString(element.code));

			if (latest < userDataItem.lastUpdate) {
				latest = userDataItem.lastUpdate;
				item = userDataItem;
			}
		});
		
		return item;
	}

	async getGoals() {
		let goals = [];
		this.countries.getCountriesData().forEach(item => {
			const userDataItem = JSON.parse(storageUser.getString(item.code));
			
			if (userDataItem.maximumDays > 0) {
				goals.push(userDataItem);
			}
		});
		
		return goals;
	}
}

export default UserData;
