class BackgroundTasks {
	//Display the notification
	static displayNotification() {
	}

	//Store the position in local memory
	static storePosition(milliseconds) {
			Geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					storagePositions.set(milliseconds.toString());
				},
				(error) => {
					// See error code charts below.
					console.log(error.code, error.message);
				},
				{ enableHighAccuracy: true, maximumAge: 1, distanceFilter: 1 }
			);
	}

	//Update the country of the position and store it in memory
	static updatePositions() {
	}
}
