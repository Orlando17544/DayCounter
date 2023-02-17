# DayCounter

React Native application to count the number of days a user spent in a country. It is useful to manage taxes in Europe.  

## Description

Create an application to count the number of days a user spent in a country. The user can put a maximum of days that he wishes to spend in different countries. The user is notified when there are 145 days left before the end of the year.

## Requeriments

1. Must have all the countries of the world arranged in alphabetical order with their respective flag.
2. Each country must have:
    - The number of days the user has spent in that country
    - The maximum number of days to spend in that country
    - A progress bar indicating in percentage the days passed against the maximum number of days
3. Must have push notifications that trigger when there are 145 days left before the end of the year.
4. Each push notification should indicate the number of days. 
5. Each push notification must indicate the number of days the user is missing to reach the maximum number of days, also indicating their respective country.
6. The app must work offline but the days need to be updated when the device is online.

## Stack

- React: 18.0.0
- React Native: 0.69.1
- Javascript
- Axios
- React Native MMKV
- Notifee

## Install

Just download the app on this [url](https://github.com/Orlando17544/Portfolio/raw/main/dayCounter.apk) and install it in a phone.

---

### If you want to run the project from source code, you should follow this steps:

1. Clone the project
```
git clone https://github.com/Orlando17544/DayCounter.git
```

2. Change directory to the project

3. Install dependencies
```
npm install
```

4. Start Metro
```
npx react-native start
```

5. Start your application

Android:
```
npx react-native run-android
```

iOS:
```
npx react-native run-ios
```

## Preview

<img src="https://github.com/Orlando17544/Portfolio/blob/main/src/assets/tourismApp.gif" alt="Simplefolio" width="900px" />
