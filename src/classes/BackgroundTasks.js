class BackgroundTasks {
	constructor() {
		this.DAYS_LEFT_YEAR_NOTIFY = 145;
		this.COUNTRIES_DATA = new COUNTRIES_DATA();
	}

	//Display the notification (background or foreground)
	async displayNotification() {
		const goals = await getGoals();
		const daysLeftYear = await getDaysLeftYear();

		if (daysLeftYear > DAYS_LEFT_YEAR_NOTIFY) {
			return;
		}

		let bodyText = '';

		if (goals.length > 1) {
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y te falta pasar:';

			goals.forEach(goal => {
				bodyText = bodyText + '\n' + '- ' + goal.daysLeft + ' días en ' + this.COUNTRIES_DATA.getName(goal.countryCode);
			});

		} else if (goals.length == 1) {
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y te falta pasar ' + goals[0].daysLeft + ' días en ' + this.COUNTRIES_DATA.getName(goals[0].countryCode);
		} else if (goals.length == 0) {
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y no has establecido ningún objetivo';
		}

		let countryCodeMaxDaysLeft = await getCountryCodeMaxDaysLeft(goals);

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
			id: countryCodeMaxDaysLeft,
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
	storePosition() {
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
	updatePositions() {
	}

	async function getGoals() {
		const countryCodes = storage.getAllKeys();

		let goals = [];
		countryCodes.forEach(countryCode => {
			const userDataItem = JSON.parse(storage.getString(countryCode));

			const daysLeft = userDataItem.maximumDays - userDataItem.days;
			
			if (userDataItem.maximumDays > 0) {
				goals.push({countryCode: countryCode, daysLeft: daysLeft});
			}
		});
		
		return goals;
	}

	async function getDaysLeftYear() {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const endYear = new Date(currentYear, 11, 31);
		const daysLeftYear = (endYear.getTime() - currentDate.getTime()) * 1.15741 * Math.pow(10, -8);

		return daysLeftYear;
	}

	async function getCountryCodeMaxDaysLeft(goals) {
		let maxDaysLeft = 0;
		let countryCode = 'AFG';

		goals.forEach(goal => {
			if (goal.daysLeft > maxDaysLeft) {
				maxDaysLeft = goal.daysLeft;
				countryCode = goal.countryCode;
			}
		});

		return countryCode;
	}
	
	// Save positions that have been stored in storage
	async function updatePositionsData() {
		const state = await NetInfo.fetch();

		if (!state.isInternetReachable) {
			return;
		}

		let millisecondsDatesKeys = storagePositions.getAllKeys();

		if (millisecondsDatesKeys.length < 2) {
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

			const latitude = position.latitude;
			const longitude = position.longitude;

			updatePositionData(latitude, longitude, timeElapsedDays);
			storagePositions.delete(millisecondsDatesKeysIntegers[i].toString());
		}
	};
	
	// Save user data in storage
	async function updatePositionData(latitude, longitude, timeElapsedDays) {
		const coordinates = latitude + ',' + longitude;
		const coordinatesEncoded = encodeURIComponent(coordinates);

		const URL = 'https://revgeocode.search.hereapi.com/v1/revgeocode?' + 'at=' + coordinatesEncoded + '&' + 'lang=en-US' + '&' + 'apiKey=' + API_KEY_here;

		const response = await axios.get(URL);

		const countryCode = response.data.items[0].address.countryCode;

		const userDataItem = JSON.parse(storage.getString(countryCode));

		const newDays = userDataItem.days + timeElapsedDays;

		console.log({...userDataItem, days: newDays});
		setUserData({...userDataItem, days: newDays});
		load(newDays, userDataItem.maximumDays);
		storage.set(countryCode, JSON.stringify({...userDataItem, days: newDays}));

	};
}
