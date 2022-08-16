/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useRef } from 'react';
import type {Node} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	TouchableOpacity,
	Modal,
	TextInput,
	Animated,
	Image,
	Alert,
	FlatList,
	Platform,
	AppState,
	Dimensions,
	ImageBackground
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import BackgroundFetch from 'react-native-background-fetch';
import { MMKV } from 'react-native-mmkv';
import Geolocation from 'react-native-geolocation-service';
import NetInfo from "@react-native-community/netinfo";
import notifee, { EventType } from '@notifee/react-native';
const axios = require('axios').default;

export const storage = new MMKV({
	id: `user-userData-storage`
})

export const storagePositions = new MMKV({
	id: `user-positions-storage`
})

import { storageNotifications } from './../../../index.js';
import API_KEY_here from './../../../API_KEY_here.js';

const FRECUENCY_HOURS = 1 / 4;
const DAYS_LEFT_YEAR_NOTIFY = 145;

if (storage.getAllKeys().length == 0) {
	storage.set('AFG', JSON.stringify({countryCode: 'AFG', days: 0, maximumDays: 0}));
	storage.set('ALA', JSON.stringify({countryCode: 'ALA', days: 0, maximumDays: 0}));
	storage.set('ALB', JSON.stringify({countryCode: 'ALB', days: 0, maximumDays: 0}));
	storage.set('DEU', JSON.stringify({countryCode: 'DEU', days: 0, maximumDays: 0}));
	storage.set('AND', JSON.stringify({countryCode: 'AND', days: 0, maximumDays: 0}));
	storage.set('AGO', JSON.stringify({countryCode: 'AGO', days: 0, maximumDays: 0}));
	storage.set('AIA', JSON.stringify({countryCode: 'AIA', days: 0, maximumDays: 0}));
	storage.set('ATA', JSON.stringify({countryCode: 'ATA', days: 0, maximumDays: 0}));
	storage.set('ATG', JSON.stringify({countryCode: 'ATG', days: 0, maximumDays: 0}));
	storage.set('SAU', JSON.stringify({countryCode: 'SAU', days: 0, maximumDays: 0}));
	storage.set('DZA', JSON.stringify({countryCode: 'DZA', days: 0, maximumDays: 0}));
	storage.set('ARG', JSON.stringify({countryCode: 'ARG', days: 0, maximumDays: 0}));
	storage.set('ARM', JSON.stringify({countryCode: 'ARM', days: 0, maximumDays: 0}));
	storage.set('ABW', JSON.stringify({countryCode: 'ABW', days: 0, maximumDays: 0}));
	storage.set('AUS', JSON.stringify({countryCode: 'AUS', days: 0, maximumDays: 0}));
	storage.set('AUT', JSON.stringify({countryCode: 'AUT', days: 0, maximumDays: 0}));
	storage.set('AZE', JSON.stringify({countryCode: 'AZE', days: 0, maximumDays: 0}));
	storage.set('BHS', JSON.stringify({countryCode: 'BHS', days: 0, maximumDays: 0}));
	storage.set('BGD', JSON.stringify({countryCode: 'BGD', days: 0, maximumDays: 0}));
	storage.set('BRB', JSON.stringify({countryCode: 'BRB', days: 0, maximumDays: 0}));
	storage.set('BHR', JSON.stringify({countryCode: 'BHR', days: 0, maximumDays: 0}));
	storage.set('BLR', JSON.stringify({countryCode: 'BLR', days: 0, maximumDays: 0}));
	storage.set('BEL', JSON.stringify({countryCode: 'BEL', days: 0, maximumDays: 0}));
	storage.set('BLZ', JSON.stringify({countryCode: 'BLZ', days: 0, maximumDays: 0}));
	storage.set('BEN', JSON.stringify({countryCode: 'BEN', days: 0, maximumDays: 0}));
	storage.set('BMU', JSON.stringify({countryCode: 'BMU', days: 0, maximumDays: 0}));
	storage.set('BTN', JSON.stringify({countryCode: 'BTN', days: 0, maximumDays: 0}));
	storage.set('BOL', JSON.stringify({countryCode: 'BOL', days: 0, maximumDays: 0}));
	storage.set('BES', JSON.stringify({countryCode: 'BES', days: 0, maximumDays: 0}));
	storage.set('BIH', JSON.stringify({countryCode: 'BIH', days: 0, maximumDays: 0}));
	storage.set('BWA', JSON.stringify({countryCode: 'BWA', days: 0, maximumDays: 0}));
	storage.set('BVT', JSON.stringify({countryCode: 'BVT', days: 0, maximumDays: 0}));
	storage.set('BRA', JSON.stringify({countryCode: 'BRA', days: 0, maximumDays: 0}));
	storage.set('BRN', JSON.stringify({countryCode: 'BRN', days: 0, maximumDays: 0}));
	storage.set('BGR', JSON.stringify({countryCode: 'BGR', days: 0, maximumDays: 0}));
	storage.set('BFA', JSON.stringify({countryCode: 'BFA', days: 0, maximumDays: 0}));
	storage.set('BDI', JSON.stringify({countryCode: 'BDI', days: 0, maximumDays: 0}));
	storage.set('CPV', JSON.stringify({countryCode: 'CPV', days: 0, maximumDays: 0}));
	storage.set('CYM', JSON.stringify({countryCode: 'CYM', days: 0, maximumDays: 0}));
	storage.set('KHM', JSON.stringify({countryCode: 'KHM', days: 0, maximumDays: 0}));
	storage.set('CMR', JSON.stringify({countryCode: 'CMR', days: 0, maximumDays: 0}));
	storage.set('CAN', JSON.stringify({countryCode: 'CAN', days: 0, maximumDays: 0}));
	storage.set('QAT', JSON.stringify({countryCode: 'QAT', days: 0, maximumDays: 0}));
	storage.set('TCD', JSON.stringify({countryCode: 'TCD', days: 0, maximumDays: 0}));
	storage.set('CZE', JSON.stringify({countryCode: 'CZE', days: 0, maximumDays: 0}));
	storage.set('CHL', JSON.stringify({countryCode: 'CHL', days: 0, maximumDays: 0}));
	storage.set('CHN', JSON.stringify({countryCode: 'CHN', days: 0, maximumDays: 0}));
	storage.set('CYP', JSON.stringify({countryCode: 'CYP', days: 0, maximumDays: 0}));
	storage.set('CCK', JSON.stringify({countryCode: 'CCK', days: 0, maximumDays: 0}));
	storage.set('COL', JSON.stringify({countryCode: 'COL', days: 0, maximumDays: 0}));
	storage.set('COM', JSON.stringify({countryCode: 'COM', days: 0, maximumDays: 0}));
	storage.set('COG', JSON.stringify({countryCode: 'COG', days: 0, maximumDays: 0}));
	storage.set('COK', JSON.stringify({countryCode: 'COK', days: 0, maximumDays: 0}));
	storage.set('KOR', JSON.stringify({countryCode: 'KOR', days: 0, maximumDays: 0}));
	storage.set('CRI', JSON.stringify({countryCode: 'CRI', days: 0, maximumDays: 0}));
	storage.set('CIV', JSON.stringify({countryCode: 'CIV', days: 0, maximumDays: 0}));
	storage.set('HRV', JSON.stringify({countryCode: 'HRV', days: 0, maximumDays: 0}));
	storage.set('CUB', JSON.stringify({countryCode: 'CUB', days: 0, maximumDays: 0}));
	storage.set('CUW', JSON.stringify({countryCode: 'CUW', days: 0, maximumDays: 0}));
	storage.set('DNK', JSON.stringify({countryCode: 'DNK', days: 0, maximumDays: 0}));
	storage.set('DMA', JSON.stringify({countryCode: 'DMA', days: 0, maximumDays: 0}));
	storage.set('DOM', JSON.stringify({countryCode: 'DOM', days: 0, maximumDays: 0}));
	storage.set('ECU', JSON.stringify({countryCode: 'ECU', days: 0, maximumDays: 0}));
	storage.set('EGY', JSON.stringify({countryCode: 'EGY', days: 0, maximumDays: 0}));
	storage.set('SLV', JSON.stringify({countryCode: 'SLV', days: 0, maximumDays: 0}));
	storage.set('ARE', JSON.stringify({countryCode: 'ARE', days: 0, maximumDays: 0}));
	storage.set('ERI', JSON.stringify({countryCode: 'ERI', days: 0, maximumDays: 0}));
	storage.set('SVK', JSON.stringify({countryCode: 'SVK', days: 0, maximumDays: 0}));
	storage.set('SVN', JSON.stringify({countryCode: 'SVN', days: 0, maximumDays: 0}));
	storage.set('ESP', JSON.stringify({countryCode: 'ESP', days: 0, maximumDays: 0}));
	storage.set('USA', JSON.stringify({countryCode: 'USA', days: 0, maximumDays: 0}));
	storage.set('EST', JSON.stringify({countryCode: 'EST', days: 0, maximumDays: 0}));
	storage.set('ETH', JSON.stringify({countryCode: 'ETH', days: 0, maximumDays: 0}));
	storage.set('FRO', JSON.stringify({countryCode: 'FRO', days: 0, maximumDays: 0}));
	storage.set('PHL', JSON.stringify({countryCode: 'PHL', days: 0, maximumDays: 0}));
	storage.set('FIN', JSON.stringify({countryCode: 'FIN', days: 0, maximumDays: 0}));
	storage.set('FJI', JSON.stringify({countryCode: 'FJI', days: 0, maximumDays: 0}));
	storage.set('FRA', JSON.stringify({countryCode: 'FRA', days: 0, maximumDays: 0}));
	storage.set('GAB', JSON.stringify({countryCode: 'GAB', days: 0, maximumDays: 0}));
	storage.set('GMB', JSON.stringify({countryCode: 'GMB', days: 0, maximumDays: 0}));
	storage.set('SGS', JSON.stringify({countryCode: 'SGS', days: 0, maximumDays: 0}));
	storage.set('GEO', JSON.stringify({countryCode: 'GEO', days: 0, maximumDays: 0}));
	storage.set('GHA', JSON.stringify({countryCode: 'GHA', days: 0, maximumDays: 0}));
	storage.set('GIB', JSON.stringify({countryCode: 'GIB', days: 0, maximumDays: 0}));
	storage.set('GRD', JSON.stringify({countryCode: 'GRD', days: 0, maximumDays: 0}));
	storage.set('GRC', JSON.stringify({countryCode: 'GRC', days: 0, maximumDays: 0}));
	storage.set('GRL', JSON.stringify({countryCode: 'GRL', days: 0, maximumDays: 0}));
	storage.set('GLP', JSON.stringify({countryCode: 'GLP', days: 0, maximumDays: 0}));
	storage.set('GUM', JSON.stringify({countryCode: 'GUM', days: 0, maximumDays: 0}));
	storage.set('GTM', JSON.stringify({countryCode: 'GTM', days: 0, maximumDays: 0}));
	storage.set('GUF', JSON.stringify({countryCode: 'GUF', days: 0, maximumDays: 0}));
	storage.set('GGY', JSON.stringify({countryCode: 'GGY', days: 0, maximumDays: 0}));
	storage.set('GNB', JSON.stringify({countryCode: 'GNB', days: 0, maximumDays: 0}));
	storage.set('GNQ', JSON.stringify({countryCode: 'GNQ', days: 0, maximumDays: 0}));
	storage.set('GIN', JSON.stringify({countryCode: 'GIN', days: 0, maximumDays: 0}));
	storage.set('GUY', JSON.stringify({countryCode: 'GUY', days: 0, maximumDays: 0}));
	storage.set('HTI', JSON.stringify({countryCode: 'HTI', days: 0, maximumDays: 0}));
	storage.set('HMD', JSON.stringify({countryCode: 'HMD', days: 0, maximumDays: 0}));
	storage.set('HND', JSON.stringify({countryCode: 'HND', days: 0, maximumDays: 0}));
	storage.set('HKG', JSON.stringify({countryCode: 'HKG', days: 0, maximumDays: 0}));
	storage.set('HUN', JSON.stringify({countryCode: 'HUN', days: 0, maximumDays: 0}));
	storage.set('IND', JSON.stringify({countryCode: 'IND', days: 0, maximumDays: 0}));
	storage.set('IDN', JSON.stringify({countryCode: 'IDN', days: 0, maximumDays: 0}));
	storage.set('IRQ', JSON.stringify({countryCode: 'IRQ', days: 0, maximumDays: 0}));
	storage.set('IRN', JSON.stringify({countryCode: 'IRN', days: 0, maximumDays: 0}));
	storage.set('IRL', JSON.stringify({countryCode: 'IRL', days: 0, maximumDays: 0}));
	storage.set('IMN', JSON.stringify({countryCode: 'IMN', days: 0, maximumDays: 0}));
	storage.set('ISL', JSON.stringify({countryCode: 'ISL', days: 0, maximumDays: 0}));
	storage.set('UMI', JSON.stringify({countryCode: 'UMI', days: 0, maximumDays: 0}));
	storage.set('ISR', JSON.stringify({countryCode: 'ISR', days: 0, maximumDays: 0}));
	storage.set('ITA', JSON.stringify({countryCode: 'ITA', days: 0, maximumDays: 0}));
	storage.set('JAM', JSON.stringify({countryCode: 'JAM', days: 0, maximumDays: 0}));
	storage.set('JPN', JSON.stringify({countryCode: 'JPN', days: 0, maximumDays: 0}));
	storage.set('JEY', JSON.stringify({countryCode: 'JEY', days: 0, maximumDays: 0}));
	storage.set('JOR', JSON.stringify({countryCode: 'JOR', days: 0, maximumDays: 0}));
	storage.set('KAZ', JSON.stringify({countryCode: 'KAZ', days: 0, maximumDays: 0}));
	storage.set('KEN', JSON.stringify({countryCode: 'KEN', days: 0, maximumDays: 0}));
	storage.set('KGZ', JSON.stringify({countryCode: 'KGZ', days: 0, maximumDays: 0}));
	storage.set('KIR', JSON.stringify({countryCode: 'KIR', days: 0, maximumDays: 0}));
	storage.set('KWT', JSON.stringify({countryCode: 'KWT', days: 0, maximumDays: 0}));
	storage.set('LAO', JSON.stringify({countryCode: 'LAO', days: 0, maximumDays: 0}));
	storage.set('LSO', JSON.stringify({countryCode: 'LSO', days: 0, maximumDays: 0}));
	storage.set('LVA', JSON.stringify({countryCode: 'LVA', days: 0, maximumDays: 0}));
	storage.set('LBN', JSON.stringify({countryCode: 'LBN', days: 0, maximumDays: 0}));
	storage.set('LBR', JSON.stringify({countryCode: 'LBR', days: 0, maximumDays: 0}));
	storage.set('LBY', JSON.stringify({countryCode: 'LBY', days: 0, maximumDays: 0}));
	storage.set('LIE', JSON.stringify({countryCode: 'LIE', days: 0, maximumDays: 0}));
	storage.set('LTU', JSON.stringify({countryCode: 'LTU', days: 0, maximumDays: 0}));
	storage.set('LUX', JSON.stringify({countryCode: 'LUX', days: 0, maximumDays: 0}));
	storage.set('MAC', JSON.stringify({countryCode: 'MAC', days: 0, maximumDays: 0}));
	storage.set('MKD', JSON.stringify({countryCode: 'MKD', days: 0, maximumDays: 0}));
	storage.set('MDG', JSON.stringify({countryCode: 'MDG', days: 0, maximumDays: 0}));
	storage.set('MYS', JSON.stringify({countryCode: 'MYS', days: 0, maximumDays: 0}));
	storage.set('MWI', JSON.stringify({countryCode: 'MWI', days: 0, maximumDays: 0}));
	storage.set('MDV', JSON.stringify({countryCode: 'MDV', days: 0, maximumDays: 0}));
	storage.set('MLI', JSON.stringify({countryCode: 'MLI', days: 0, maximumDays: 0}));
	storage.set('MLT', JSON.stringify({countryCode: 'MLT', days: 0, maximumDays: 0}));
	storage.set('FLK', JSON.stringify({countryCode: 'FLK', days: 0, maximumDays: 0}));
	storage.set('MNP', JSON.stringify({countryCode: 'MNP', days: 0, maximumDays: 0}));
	storage.set('MAR', JSON.stringify({countryCode: 'MAR', days: 0, maximumDays: 0}));
	storage.set('MHL', JSON.stringify({countryCode: 'MHL', days: 0, maximumDays: 0}));
	storage.set('MTQ', JSON.stringify({countryCode: 'MTQ', days: 0, maximumDays: 0}));
	storage.set('MUS', JSON.stringify({countryCode: 'MUS', days: 0, maximumDays: 0}));
	storage.set('MRT', JSON.stringify({countryCode: 'MRT', days: 0, maximumDays: 0}));
	storage.set('MYT', JSON.stringify({countryCode: 'MYT', days: 0, maximumDays: 0}));
	storage.set('MEX', JSON.stringify({countryCode: 'MEX', days: 0, maximumDays: 0}));
	storage.set('FSM', JSON.stringify({countryCode: 'FSM', days: 0, maximumDays: 0}));
	storage.set('MDA', JSON.stringify({countryCode: 'MDA', days: 0, maximumDays: 0}));
	storage.set('MCO', JSON.stringify({countryCode: 'MCO', days: 0, maximumDays: 0}));
	storage.set('MNG', JSON.stringify({countryCode: 'MNG', days: 0, maximumDays: 0}));
	storage.set('MNE', JSON.stringify({countryCode: 'MNE', days: 0, maximumDays: 0}));
	storage.set('MSR', JSON.stringify({countryCode: 'MSR', days: 0, maximumDays: 0}));
	storage.set('MOZ', JSON.stringify({countryCode: 'MOZ', days: 0, maximumDays: 0}));
	storage.set('MMR', JSON.stringify({countryCode: 'MMR', days: 0, maximumDays: 0}));
	storage.set('NAM', JSON.stringify({countryCode: 'NAM', days: 0, maximumDays: 0}));
	storage.set('NRU', JSON.stringify({countryCode: 'NRU', days: 0, maximumDays: 0}));
	storage.set('CXR', JSON.stringify({countryCode: 'CXR', days: 0, maximumDays: 0}));
	storage.set('NPL', JSON.stringify({countryCode: 'NPL', days: 0, maximumDays: 0}));
	storage.set('NIC', JSON.stringify({countryCode: 'NIC', days: 0, maximumDays: 0}));
	storage.set('NER', JSON.stringify({countryCode: 'NER', days: 0, maximumDays: 0}));
	storage.set('NGA', JSON.stringify({countryCode: 'NGA', days: 0, maximumDays: 0}));
	storage.set('NIU', JSON.stringify({countryCode: 'NIU', days: 0, maximumDays: 0}));
	storage.set('NFK', JSON.stringify({countryCode: 'NFK', days: 0, maximumDays: 0}));
	storage.set('NOR', JSON.stringify({countryCode: 'NOR', days: 0, maximumDays: 0}));
	storage.set('NCL', JSON.stringify({countryCode: 'NCL', days: 0, maximumDays: 0}));
	storage.set('NZL', JSON.stringify({countryCode: 'NZL', days: 0, maximumDays: 0}));
	storage.set('OMN', JSON.stringify({countryCode: 'OMN', days: 0, maximumDays: 0}));
	storage.set('NLD', JSON.stringify({countryCode: 'NLD', days: 0, maximumDays: 0}));
	storage.set('PAK', JSON.stringify({countryCode: 'PAK', days: 0, maximumDays: 0}));
	storage.set('PLW', JSON.stringify({countryCode: 'PLW', days: 0, maximumDays: 0}));
	storage.set('PSE', JSON.stringify({countryCode: 'PSE', days: 0, maximumDays: 0}));
	storage.set('PAN', JSON.stringify({countryCode: 'PAN', days: 0, maximumDays: 0}));
	storage.set('PNG', JSON.stringify({countryCode: 'PNG', days: 0, maximumDays: 0}));
	storage.set('PRY', JSON.stringify({countryCode: 'PRY', days: 0, maximumDays: 0}));
	storage.set('PER', JSON.stringify({countryCode: 'PER', days: 0, maximumDays: 0}));
	storage.set('PCN', JSON.stringify({countryCode: 'PCN', days: 0, maximumDays: 0}));
	storage.set('PYF', JSON.stringify({countryCode: 'PYF', days: 0, maximumDays: 0}));
	storage.set('POL', JSON.stringify({countryCode: 'POL', days: 0, maximumDays: 0}));
	storage.set('PRT', JSON.stringify({countryCode: 'PRT', days: 0, maximumDays: 0}));
	storage.set('PRI', JSON.stringify({countryCode: 'PRI', days: 0, maximumDays: 0}));
	storage.set('GBR', JSON.stringify({countryCode: 'GBR', days: 0, maximumDays: 0}));
	storage.set('SYR', JSON.stringify({countryCode: 'SYR', days: 0, maximumDays: 0}));
	storage.set('CAF', JSON.stringify({countryCode: 'CAF', days: 0, maximumDays: 0}));
	storage.set('COD', JSON.stringify({countryCode: 'COD', days: 0, maximumDays: 0}));
	storage.set('PRK', JSON.stringify({countryCode: 'PRK', days: 0, maximumDays: 0}));
	storage.set('REU', JSON.stringify({countryCode: 'REU', days: 0, maximumDays: 0}));
	storage.set('RWA', JSON.stringify({countryCode: 'RWA', days: 0, maximumDays: 0}));
	storage.set('ROU', JSON.stringify({countryCode: 'ROU', days: 0, maximumDays: 0}));
	storage.set('RUS', JSON.stringify({countryCode: 'RUS', days: 0, maximumDays: 0}));
	storage.set('ESH', JSON.stringify({countryCode: 'ESH', days: 0, maximumDays: 0}));
	storage.set('BLM', JSON.stringify({countryCode: 'BLM', days: 0, maximumDays: 0}));
	storage.set('MAF', JSON.stringify({countryCode: 'MAF', days: 0, maximumDays: 0}));
	storage.set('SLB', JSON.stringify({countryCode: 'SLB', days: 0, maximumDays: 0}));
	storage.set('ASM', JSON.stringify({countryCode: 'ASM', days: 0, maximumDays: 0}));
	storage.set('WSM', JSON.stringify({countryCode: 'WSM', days: 0, maximumDays: 0}));
	storage.set('KNA', JSON.stringify({countryCode: 'KNA', days: 0, maximumDays: 0}));
	storage.set('SMR', JSON.stringify({countryCode: 'SMR', days: 0, maximumDays: 0}));
	storage.set('SPM', JSON.stringify({countryCode: 'SPM', days: 0, maximumDays: 0}));
	storage.set('VCT', JSON.stringify({countryCode: 'VCT', days: 0, maximumDays: 0}));
	storage.set('SHN', JSON.stringify({countryCode: 'SHN', days: 0, maximumDays: 0}));
	storage.set('LCA', JSON.stringify({countryCode: 'LCA', days: 0, maximumDays: 0}));
	storage.set('VAT', JSON.stringify({countryCode: 'VAT', days: 0, maximumDays: 0}));
	storage.set('STP', JSON.stringify({countryCode: 'STP', days: 0, maximumDays: 0}));
	storage.set('SEN', JSON.stringify({countryCode: 'SEN', days: 0, maximumDays: 0}));
	storage.set('SRB', JSON.stringify({countryCode: 'SRB', days: 0, maximumDays: 0}));
	storage.set('SYC', JSON.stringify({countryCode: 'SYC', days: 0, maximumDays: 0}));
	storage.set('SLE', JSON.stringify({countryCode: 'SLE', days: 0, maximumDays: 0}));
	storage.set('SGP', JSON.stringify({countryCode: 'SGP', days: 0, maximumDays: 0}));
	storage.set('SXM', JSON.stringify({countryCode: 'SXM', days: 0, maximumDays: 0}));
	storage.set('SOM', JSON.stringify({countryCode: 'SOM', days: 0, maximumDays: 0}));
	storage.set('LKA', JSON.stringify({countryCode: 'LKA', days: 0, maximumDays: 0}));
	storage.set('SWZ', JSON.stringify({countryCode: 'SWZ', days: 0, maximumDays: 0}));
	storage.set('ZAF', JSON.stringify({countryCode: 'ZAF', days: 0, maximumDays: 0}));
	storage.set('SSD', JSON.stringify({countryCode: 'SSD', days: 0, maximumDays: 0}));
	storage.set('SDN', JSON.stringify({countryCode: 'SDN', days: 0, maximumDays: 0}));
	storage.set('SWE', JSON.stringify({countryCode: 'SWE', days: 0, maximumDays: 0}));
	storage.set('CHE', JSON.stringify({countryCode: 'CHE', days: 0, maximumDays: 0}));
	storage.set('SUR', JSON.stringify({countryCode: 'SUR', days: 0, maximumDays: 0}));
	storage.set('SJM', JSON.stringify({countryCode: 'SJM', days: 0, maximumDays: 0}));
	storage.set('THA', JSON.stringify({countryCode: 'THA', days: 0, maximumDays: 0}));
	storage.set('TWN', JSON.stringify({countryCode: 'TWN', days: 0, maximumDays: 0}));
	storage.set('TZA', JSON.stringify({countryCode: 'TZA', days: 0, maximumDays: 0}));
	storage.set('TJK', JSON.stringify({countryCode: 'TJK', days: 0, maximumDays: 0}));
	storage.set('IOT', JSON.stringify({countryCode: 'IOT', days: 0, maximumDays: 0}));
	storage.set('ATF', JSON.stringify({countryCode: 'ATF', days: 0, maximumDays: 0}));
	storage.set('TLS', JSON.stringify({countryCode: 'TLS', days: 0, maximumDays: 0}));
	storage.set('TGO', JSON.stringify({countryCode: 'TGO', days: 0, maximumDays: 0}));
	storage.set('TKL', JSON.stringify({countryCode: 'TKL', days: 0, maximumDays: 0}));
	storage.set('TON', JSON.stringify({countryCode: 'TON', days: 0, maximumDays: 0}));
	storage.set('TTO', JSON.stringify({countryCode: 'TTO', days: 0, maximumDays: 0}));
	storage.set('TUN', JSON.stringify({countryCode: 'TUN', days: 0, maximumDays: 0}));
	storage.set('TCA', JSON.stringify({countryCode: 'TCA', days: 0, maximumDays: 0}));
	storage.set('TKM', JSON.stringify({countryCode: 'TKM', days: 0, maximumDays: 0}));
	storage.set('TUR', JSON.stringify({countryCode: 'TUR', days: 0, maximumDays: 0}));
	storage.set('TUV', JSON.stringify({countryCode: 'TUV', days: 0, maximumDays: 0}));
	storage.set('UKR', JSON.stringify({countryCode: 'UKR', days: 0, maximumDays: 0}));
	storage.set('UGA', JSON.stringify({countryCode: 'UGA', days: 0, maximumDays: 0}));
	storage.set('URY', JSON.stringify({countryCode: 'URY', days: 0, maximumDays: 0}));
	storage.set('UZB', JSON.stringify({countryCode: 'UZB', days: 0, maximumDays: 0}));
	storage.set('VUT', JSON.stringify({countryCode: 'VUT', days: 0, maximumDays: 0}));
	storage.set('VEN', JSON.stringify({countryCode: 'VEN', days: 0, maximumDays: 0}));
	storage.set('VNM', JSON.stringify({countryCode: 'VNM', days: 0, maximumDays: 0}));
	storage.set('VGB', JSON.stringify({countryCode: 'VGB', days: 0, maximumDays: 0}));
	storage.set('VIR', JSON.stringify({countryCode: 'VIR', days: 0, maximumDays: 0}));
	storage.set('WLF', JSON.stringify({countryCode: 'WLF', days: 0, maximumDays: 0}));
	storage.set('YEM', JSON.stringify({countryCode: 'YEM', days: 0, maximumDays: 0}));
	storage.set('DJI', JSON.stringify({countryCode: 'DJI', days: 0, maximumDays: 0}));
	storage.set('ZMB', JSON.stringify({countryCode: 'ZMB', days: 0, maximumDays: 0}));
	storage.set('ZWE', JSON.stringify({countryCode: 'ZWE', days: 0, maximumDays: 0}));
}

const COUNTRIES_DATA = {
	'AFG': {name: 'Afganistán', source: require('./../../../assets/flags/af.png')},
	'ALA': {name: 'Åland, Islas', source: require('./../../../assets/flags/ax.png')},
	'ALB': {name: 'Albania', source: require('./../../../assets/flags/al.png')},
	'DEU': {name: 'Alemania', source: require('./../../../assets/flags/de.png')},
	'AND': {name: 'Andorra', source: require('./../../../assets/flags/ad.png')},
	'AGO': {name: 'Angola', source: require('./../../../assets/flags/ao.png')},
	'AIA': {name: 'Anguila', source: require('./../../../assets/flags/ai.png')},
	'ATA': {name: 'Antártida', source: require('./../../../assets/flags/aq.png')},
	'ATG': {name: 'Antigua y Barbuda', source: require('./../../../assets/flags/ag.png')},
	'SAU': {name: 'Arabia Saudita', source: require('./../../../assets/flags/sa.png')},
	'DZA': {name: 'Argelia', source: require('./../../../assets/flags/dz.png')},
	'ARG': {name: 'Argentina', source: require('./../../../assets/flags/ar.png')},
	'ARM': {name: 'Armenia', source: require('./../../../assets/flags/am.png')},
	'ABW': {name: 'Aruba', source: require('./../../../assets/flags/aw.png')},
	'AUS': {name: 'Australia', source: require('./../../../assets/flags/au.png')},
	'AUT': {name: 'Austria', source: require('./../../../assets/flags/at.png')},
	'AZE': {name: 'Azerbaiyán', source: require('./../../../assets/flags/az.png')},
	'BHS': {name: 'Bahamas ', source: require('./../../../assets/flags/bs.png')},
	'BGD': {name: 'Bangladés', source: require('./../../../assets/flags/bd.png')},
	'BRB': {name: 'Barbados', source: require('./../../../assets/flags/bb.png')},
	'BHR': {name: 'Baréin', source: require('./../../../assets/flags/bh.png')},
	'BLR': {name: 'Belarús', source: require('./../../../assets/flags/by.png')},
	'BEL': {name: 'Bélgica', source: require('./../../../assets/flags/be.png')},
	'BLZ': {name: 'Belice', source: require('./../../../assets/flags/bz.png')},
	'BEN': {name: 'Benín', source: require('./../../../assets/flags/bj.png')},
	'BMU': {name: 'Bermudas', source: require('./../../../assets/flags/bm.png')},
	'BTN': {name: 'Bhután', source: require('./../../../assets/flags/bt.png')},
	'BOL': {name: 'Bolivia ', source: require('./../../../assets/flags/bo.png')},
	'BES': {name: 'Bonaire, San Eustaquio y Saba', source: require('./../../../assets/flags/bq.png')},
	'BIH': {name: 'Bosnia y Herzegovina', source: require('./../../../assets/flags/ba.png')},
	'BWA': {name: 'Botsuana', source: require('./../../../assets/flags/bw.png')},
	'BVT': {name: 'Bouvet, Isla', source: require('./../../../assets/flags/bv.png')},
	'BRA': {name: 'Brasil', source: require('./../../../assets/flags/br.png')},
	'BRN': {name: 'Brunéi Darussalam', source: require('./../../../assets/flags/bn.png')},
	'BGR': {name: 'Bulgaria', source: require('./../../../assets/flags/bg.png')},
	'BFA': {name: 'Burkina Faso', source: require('./../../../assets/flags/bf.png')},
	'BDI': {name: 'Burundi', source: require('./../../../assets/flags/bi.png')},
	'CPV': {name: 'Cabo Verde', source: require('./../../../assets/flags/cv.png')},
	'CYM': {name: 'Caimán,  Islas', source: require('./../../../assets/flags/ky.png')},
	'KHM': {name: 'Camboya', source: require('./../../../assets/flags/kh.png')},
	'CMR': {name: 'Camerún', source: require('./../../../assets/flags/cm.png')},
	'CAN': {name: 'Canadá', source: require('./../../../assets/flags/ca.png')},
	'QAT': {name: 'Catar', source: require('./../../../assets/flags/qa.png')},
	'TCD': {name: 'Chad', source: require('./../../../assets/flags/td.png')},
	'CZE': {name: 'Chequia', source: require('./../../../assets/flags/cz.png')},
	'CHL': {name: 'Chile', source: require('./../../../assets/flags/cl.png')},
	'CHN': {name: 'China', source: require('./../../../assets/flags/cn.png')},
	'CYP': {name: 'Chipre', source: require('./../../../assets/flags/cy.png')},
	'CCK': {name: 'Cocos / Keeling,  Islas', source: require('./../../../assets/flags/cc.png')},
	'COL': {name: 'Colombia', source: require('./../../../assets/flags/co.png')},
	'COM': {name: 'Comoras ', source: require('./../../../assets/flags/km.png')},
	'COG': {name: 'Congo ', source: require('./../../../assets/flags/cg.png')},
	'COK': {name: 'Cook,  Islas', source: require('./../../../assets/flags/ck.png')},
	'KOR': {name: 'Corea ', source: require('./../../../assets/flags/kr.png')},
	'CRI': {name: 'Costa Rica', source: require('./../../../assets/flags/cr.png')},
	'CIV': {name: 'Côte d\'Ivoire', source: require('./../../../assets/flags/ci.png')},
	'HRV': {name: 'Croacia', source: require('./../../../assets/flags/hr.png')},
	'CUB': {name: 'Cuba', source: require('./../../../assets/flags/cu.png')},
	'CUW': {name: 'Curaçao', source: require('./../../../assets/flags/cw.png')},
	'DNK': {name: 'Dinamarca', source: require('./../../../assets/flags/dk.png')},
	'DMA': {name: 'Dominica', source: require('./../../../assets/flags/dm.png')},
	'DOM': {name: 'Dominicana,  República', source: require('./../../../assets/flags/do.png')},
	'ECU': {name: 'Ecuador', source: require('./../../../assets/flags/ec.png')},
	'EGY': {name: 'Egipto', source: require('./../../../assets/flags/eg.png')},
	'SLV': {name: 'El Salvador', source: require('./../../../assets/flags/sv.png')},
	'ARE': {name: 'Emiratos Árabes Unidos ', source: require('./../../../assets/flags/ae.png')},
	'ERI': {name: 'Eritrea', source: require('./../../../assets/flags/er.png')},
	'SVK': {name: 'Eslovaquia', source: require('./../../../assets/flags/sk.png')},
	'SVN': {name: 'Eslovenia', source: require('./../../../assets/flags/si.png')},
	'ESP': {name: 'España', source: require('./../../../assets/flags/es.png')},
	'USA': {name: 'Estados Unidos de América ', source: require('./../../../assets/flags/us.png')},
	'EST': {name: 'Estonia', source: require('./../../../assets/flags/ee.png')},
	'ETH': {name: 'Etiopía', source: require('./../../../assets/flags/et.png')},
	'FRO': {name: 'Feroe,  Islas', source: require('./../../../assets/flags/fo.png')},
	'PHL': {name: 'Filipinas ', source: require('./../../../assets/flags/ph.png')},
	'FIN': {name: 'Finlandia', source: require('./../../../assets/flags/fi.png')},
	'FJI': {name: 'Fiyi', source: require('./../../../assets/flags/fj.png')},
	'FRA': {name: 'Francia', source: require('./../../../assets/flags/fr.png')},
	'GAB': {name: 'Gabón', source: require('./../../../assets/flags/ga.png')},
	'GMB': {name: 'Gambia ', source: require('./../../../assets/flags/gm.png')},
	'SGS': {name: 'Georgia del Sur  y las Islas Sandwich del Sur', source: require('./../../../assets/flags/gs.png')},
	'GEO': {name: 'Georgia', source: require('./../../../assets/flags/ge.png')},
	'GHA': {name: 'Ghana', source: require('./../../../assets/flags/gh.png')},
	'GIB': {name: 'Gibraltar', source: require('./../../../assets/flags/gi.png')},
	'GRD': {name: 'Granada', source: require('./../../../assets/flags/gd.png')},
	'GRC': {name: 'Grecia', source: require('./../../../assets/flags/gr.png')},
	'GRL': {name: 'Groenlandia', source: require('./../../../assets/flags/gl.png')},
	'GLP': {name: 'Guadeloupe', source: require('./../../../assets/flags/gp.png')},
	'GUM': {name: 'Guam', source: require('./../../../assets/flags/gu.png')},
	'GTM': {name: 'Guatemala', source: require('./../../../assets/flags/gt.png')},
	'GUF': {name: 'Guayana Francesa', source: require('./../../../assets/flags/gf.png')},
	'GGY': {name: 'Guernsey', source: require('./../../../assets/flags/gg.png')},
	'GNB': {name: 'Guinea Bissau', source: require('./../../../assets/flags/gw.png')},
	'GNQ': {name: 'Guinea Ecuatorial', source: require('./../../../assets/flags/gq.png')},
	'GIN': {name: 'Guinea', source: require('./../../../assets/flags/gn.png')},
	'GUY': {name: 'Guyana', source: require('./../../../assets/flags/gy.png')},
	'HTI': {name: 'Haití', source: require('./../../../assets/flags/ht.png')},
	'HMD': {name: 'Heard  e Islas McDonald', source: require('./../../../assets/flags/hm.png')},
	'HND': {name: 'Honduras', source: require('./../../../assets/flags/hn.png')},
	'HKG': {name: 'Hong Kong', source: require('./../../../assets/flags/hk.png')},
	'HUN': {name: 'Hungría', source: require('./../../../assets/flags/hu.png')},
	'IND': {name: 'India', source: require('./../../../assets/flags/in.png')},
	'IDN': {name: 'Indonesia', source: require('./../../../assets/flags/id.png')},
	'IRQ': {name: 'Irak', source: require('./../../../assets/flags/iq.png')},
	'IRN': {name: 'Irán ', source: require('./../../../assets/flags/ir.png')},
	'IRL': {name: 'Irlanda', source: require('./../../../assets/flags/ie.png')},
	'IMN': {name: 'Isla de Man', source: require('./../../../assets/flags/im.png')},
	'ISL': {name: 'Islandia', source: require('./../../../assets/flags/is.png')},
	'UMI': {name: 'Islas Ultramarinas Menores de los Estados Unidos ', source: require('./../../../assets/flags/um.png')},
	'ISR': {name: 'Israel', source: require('./../../../assets/flags/il.png')},
	'ITA': {name: 'Italia', source: require('./../../../assets/flags/it.png')},
	'JAM': {name: 'Jamaica', source: require('./../../../assets/flags/jm.png')},
	'JPN': {name: 'Japón', source: require('./../../../assets/flags/jp.png')},
	'JEY': {name: 'Jersey', source: require('./../../../assets/flags/je.png')},
	'JOR': {name: 'Jordania', source: require('./../../../assets/flags/jo.png')},
	'KAZ': {name: 'Kazajistán', source: require('./../../../assets/flags/kz.png')},
	'KEN': {name: 'Kenia', source: require('./../../../assets/flags/ke.png')},
	'KGZ': {name: 'Kirguistán', source: require('./../../../assets/flags/kg.png')},
	'KIR': {name: 'Kiribati', source: require('./../../../assets/flags/ki.png')},
	'KWT': {name: 'Kuwait', source: require('./../../../assets/flags/kw.png')},
	'LAO': {name: 'Lao,  República Democrática Popular', source: require('./../../../assets/flags/la.png')},
	'LSO': {name: 'Lesoto', source: require('./../../../assets/flags/ls.png')},
	'LVA': {name: 'Letonia', source: require('./../../../assets/flags/lv.png')},
	'LBN': {name: 'Líbano', source: require('./../../../assets/flags/lb.png')},
	'LBR': {name: 'Liberia', source: require('./../../../assets/flags/lr.png')},
	'LBY': {name: 'Libia', source: require('./../../../assets/flags/ly.png')},
	'LIE': {name: 'Liechtenstein', source: require('./../../../assets/flags/li.png')},
	'LTU': {name: 'Lituania', source: require('./../../../assets/flags/lt.png')},
	'LUX': {name: 'Luxemburgo', source: require('./../../../assets/flags/lu.png')},
	'MAC': {name: 'Macao', source: require('./../../../assets/flags/mo.png')},
	'MKD': {name: 'Macedonia del Norte', source: require('./../../../assets/flags/mk.png')},
	'MDG': {name: 'Madagascar', source: require('./../../../assets/flags/mg.png')},
	'MYS': {name: 'Malasia', source: require('./../../../assets/flags/my.png')},
	'MWI': {name: 'Malawi', source: require('./../../../assets/flags/mw.png')},
	'MDV': {name: 'Maldivas', source: require('./../../../assets/flags/mv.png')},
	'MLI': {name: 'Malí', source: require('./../../../assets/flags/ml.png')},
	'MLT': {name: 'Malta', source: require('./../../../assets/flags/mt.png')},
	'FLK': {name: 'Malvinas [Falkland],  Islas', source: require('./../../../assets/flags/fk.png')},
	'MNP': {name: 'Marianas del Norte,  Islas', source: require('./../../../assets/flags/mp.png')},
	'MAR': {name: 'Marruecos', source: require('./../../../assets/flags/ma.png')},
	'MHL': {name: 'Marshall,  Islas', source: require('./../../../assets/flags/mh.png')},
	'MTQ': {name: 'Martinique', source: require('./../../../assets/flags/mq.png')},
	'MUS': {name: 'Mauricio', source: require('./../../../assets/flags/mu.png')},
	'MRT': {name: 'Mauritania', source: require('./../../../assets/flags/mr.png')},
	'MYT': {name: 'Mayotte', source: require('./../../../assets/flags/yt.png')},
	'MEX': {name: 'México', source: require('./../../../assets/flags/mx.png')},
	'FSM': {name: 'Micronesia ', source: require('./../../../assets/flags/fm.png')},
	'MDA': {name: 'Moldavia ', source: require('./../../../assets/flags/md.png')},
	'MCO': {name: 'Mónaco', source: require('./../../../assets/flags/mc.png')},
	'MNG': {name: 'Mongolia', source: require('./../../../assets/flags/mn.png')},
	'MNE': {name: 'Montenegro', source: require('./../../../assets/flags/me.png')},
	'MSR': {name: 'Montserrat', source: require('./../../../assets/flags/ms.png')},
	'MOZ': {name: 'Mozambique', source: require('./../../../assets/flags/mz.png')},
	'MMR': {name: 'Myanmar', source: require('./../../../assets/flags/mm.png')},
	'NAM': {name: 'Namibia', source: require('./../../../assets/flags/na.png')},
	'NRU': {name: 'Nauru', source: require('./../../../assets/flags/nr.png')},
	'CXR': {name: 'Navidad, Isla de', source: require('./../../../assets/flags/cx.png')},
	'NPL': {name: 'Nepal', source: require('./../../../assets/flags/np.png')},
	'NIC': {name: 'Nicaragua', source: require('./../../../assets/flags/ni.png')},
	'NER': {name: 'Níger ', source: require('./../../../assets/flags/ne.png')},
	'NGA': {name: 'Nigeria', source: require('./../../../assets/flags/ng.png')},
	'NIU': {name: 'Niue', source: require('./../../../assets/flags/nu.png')},
	'NFK': {name: 'Norfolk, Isla', source: require('./../../../assets/flags/nf.png')},
	'NOR': {name: 'Noruega', source: require('./../../../assets/flags/no.png')},
	'NCL': {name: 'Nueva Caledonia', source: require('./../../../assets/flags/nc.png')},
	'NZL': {name: 'Nueva Zelandia', source: require('./../../../assets/flags/nz.png')},
	'OMN': {name: 'Omán', source: require('./../../../assets/flags/om.png')},
	'NLD': {name: 'Países Bajos ', source: require('./../../../assets/flags/nl.png')},
	'PAK': {name: 'Pakistán', source: require('./../../../assets/flags/pk.png')},
	'PLW': {name: 'Palaos', source: require('./../../../assets/flags/pw.png')},
	'PSE': {name: 'Palestina, Estado de', source: require('./../../../assets/flags/ps.png')},
	'PAN': {name: 'Panamá', source: require('./../../../assets/flags/pa.png')},
	'PNG': {name: 'Papúa Nueva Guinea', source: require('./../../../assets/flags/pg.png')},
	'PRY': {name: 'Paraguay', source: require('./../../../assets/flags/py.png')},
	'PER': {name: 'Perú', source: require('./../../../assets/flags/pe.png')},
	'PCN': {name: 'Pitcairn', source: require('./../../../assets/flags/pn.png')},
	'PYF': {name: 'Polinesia Francesa', source: require('./../../../assets/flags/pf.png')},
	'POL': {name: 'Polonia', source: require('./../../../assets/flags/pl.png')},
	'PRT': {name: 'Portugal', source: require('./../../../assets/flags/pt.png')},
	'PRI': {name: 'Puerto Rico', source: require('./../../../assets/flags/pr.png')},
	'GBR': {name: 'Reino Unido de Gran Bretaña e Irlanda del Norte ', source: require('./../../../assets/flags/gb.png')},
	'SYR': {name: 'República Árabe Siria', source: require('./../../../assets/flags/sy.png')},
	'CAF': {name: 'República Centroafricana ', source: require('./../../../assets/flags/cf.png')},
	'COD': {name: 'República Democrática del Congo', source: require('./../../../assets/flags/cd.png')},
	'PRK': {name: 'República Popular Democrática de Corea', source: require('./../../../assets/flags/kp.png')},
	'REU': {name: 'Reunión', source: require('./../../../assets/flags/re.png')},
	'RWA': {name: 'Ruanda', source: require('./../../../assets/flags/rw.png')},
	'ROU': {name: 'Rumania', source: require('./../../../assets/flags/ro.png')},
	'RUS': {name: 'Rusia,  Federación de', source: require('./../../../assets/flags/ru.png')},
	'ESH': {name: 'Sahara Occidental', source: require('./../../../assets/flags/eh.png')},
	'BLM': {name: 'Saint Barthélemy', source: require('./../../../assets/flags/bl.png')},
	'MAF': {name: 'Saint Martin ', source: require('./../../../assets/flags/mf.png')},
	'SLB': {name: 'Salomón, Islas', source: require('./../../../assets/flags/sb.png')},
	'ASM': {name: 'Samoa Americana', source: require('./../../../assets/flags/as.png')},
	'WSM': {name: 'Samoa', source: require('./../../../assets/flags/ws.png')},
	'KNA': {name: 'San Cristóbal y Nieves', source: require('./../../../assets/flags/kn.png')},
	'SMR': {name: 'San Marino', source: require('./../../../assets/flags/sm.png')},
	'SPM': {name: 'San Pedro y Miquelón', source: require('./../../../assets/flags/pm.png')},
	'VCT': {name: 'San Vicente y las Granadinas', source: require('./../../../assets/flags/vc.png')},
	'SHN': {name: 'Santa Helena, Ascensión y Tristán de Acuña', source: require('./../../../assets/flags/sh.png')},
	'LCA': {name: 'Santa Lucía', source: require('./../../../assets/flags/lc.png')},
	'VAT': {name: 'Santa Sede ', source: require('./../../../assets/flags/va.png')},
	'STP': {name: 'Santo Tomé y Príncipe', source: require('./../../../assets/flags/st.png')},
	'SEN': {name: 'Senegal', source: require('./../../../assets/flags/sn.png')},
	'SRB': {name: 'Serbia', source: require('./../../../assets/flags/rs.png')},
	'SYC': {name: 'Seychelles', source: require('./../../../assets/flags/sc.png')},
	'SLE': {name: 'Sierra leona', source: require('./../../../assets/flags/sl.png')},
	'SGP': {name: 'Singapur', source: require('./../../../assets/flags/sg.png')},
	'SXM': {name: 'Sint Maarten ', source: require('./../../../assets/flags/sx.png')},
	'SOM': {name: 'Somalia', source: require('./../../../assets/flags/so.png')},
	'LKA': {name: 'Sri Lanka', source: require('./../../../assets/flags/lk.png')},
	'SWZ': {name: 'Suazilandia', source: require('./../../../assets/flags/sz.png')},
	'ZAF': {name: 'Sudáfrica', source: require('./../../../assets/flags/za.png')},
	'SSD': {name: 'Sudán del Sur', source: require('./../../../assets/flags/ss.png')},
	'SDN': {name: 'Sudán ', source: require('./../../../assets/flags/sd.png')},
	'SWE': {name: 'Suecia', source: require('./../../../assets/flags/se.png')},
	'CHE': {name: 'Suiza', source: require('./../../../assets/flags/ch.png')},
	'SUR': {name: 'Suriname', source: require('./../../../assets/flags/sr.png')},
	'SJM': {name: 'Svalbard y Jan Mayen', source: require('./../../../assets/flags/sj.png')},
	'THA': {name: 'Tailandia', source: require('./../../../assets/flags/th.png')},
	'TWN': {name: 'Taiwán ', source: require('./../../../assets/flags/tw.png')},
	'TZA': {name: 'Tanzania, República Unida de', source: require('./../../../assets/flags/tz.png')},
	'TJK': {name: 'Tayikistán', source: require('./../../../assets/flags/tj.png')},
	'IOT': {name: 'Territorio Británico del Océano Índico ', source: require('./../../../assets/flags/io.png')},
	'ATF': {name: 'Tierras Australes Francesas ', source: require('./../../../assets/flags/tf.png')},
	'TLS': {name: 'Timor-Leste', source: require('./../../../assets/flags/tl.png')},
	'TGO': {name: 'Togo', source: require('./../../../assets/flags/tg.png')},
	'TKL': {name: 'Tokelau', source: require('./../../../assets/flags/tk.png')},
	'TON': {name: 'Tonga', source: require('./../../../assets/flags/to.png')},
	'TTO': {name: 'Trinidad y Tobago', source: require('./../../../assets/flags/tt.png')},
	'TUN': {name: 'Túnez', source: require('./../../../assets/flags/tn.png')},
	'TCA': {name: 'Turcas y Caicos,  Islas', source: require('./../../../assets/flags/tc.png')},
	'TKM': {name: 'Turkmenistán', source: require('./../../../assets/flags/tm.png')},
	'TUR': {name: 'Turquía', source: require('./../../../assets/flags/tr.png')},
	'TUV': {name: 'Tuvalu', source: require('./../../../assets/flags/tv.png')},
	'UKR': {name: 'Ucrania', source: require('./../../../assets/flags/ua.png')},
	'UGA': {name: 'Uganda', source: require('./../../../assets/flags/ug.png')},
	'URY': {name: 'Uruguay', source: require('./../../../assets/flags/uy.png')},
	'UZB': {name: 'Uzbekistán', source: require('./../../../assets/flags/uz.png')},
	'VUT': {name: 'Vanuatu', source: require('./../../../assets/flags/vu.png')},
	'VEN': {name: 'Venezuela ', source: require('./../../../assets/flags/ve.png')},
	'VNM': {name: 'Viet Nam', source: require('./../../../assets/flags/vn.png')},
	'VGB': {name: 'Vírgenes británicas, Islas', source: require('./../../../assets/flags/vg.png')},
	'VIR': {name: 'Vírgenes de los Estados Unidos, Islas', source: require('./../../../assets/flags/vi.png')},
	'WLF': {name: 'Wallis y Futuna', source: require('./../../../assets/flags/wf.png')},
	'YEM': {name: 'Yemen', source: require('./../../../assets/flags/ye.png')},
	'DJI': {name: 'Yibuti', source: require('./../../../assets/flags/dj.png')},
	'ZMB': {name: 'Zambia', source: require('./../../../assets/flags/zm.png')},
	'ZWE': {name: 'Zimbabue', source: require('./../../../assets/flags/zw.png')}
};

COUNTRIES_DATA_ARRAY = [
	{code: 'AFG', name: 'Afganistán', source: require('./../../../assets/flags/af.png')},
	{code: 'ALA', name: 'Åland, Islas', source: require('./../../../assets/flags/ax.png')},
	{code: 'ALB', name: 'Albania', source: require('./../../../assets/flags/al.png')},
	{code: 'DEU', name: 'Alemania', source: require('./../../../assets/flags/de.png')},
	{code: 'AND', name: 'Andorra', source: require('./../../../assets/flags/ad.png')},
	{code: 'AGO', name: 'Angola', source: require('./../../../assets/flags/ao.png')},
	{code: 'AIA', name: 'Anguila', source: require('./../../../assets/flags/ai.png')},
	{code: 'ATA', name: 'Antártida', source: require('./../../../assets/flags/aq.png')},
	{code: 'ATG', name: 'Antigua y Barbuda', source: require('./../../../assets/flags/ag.png')},
	{code: 'SAU', name: 'Arabia Saudita', source: require('./../../../assets/flags/sa.png')},
	{code: 'DZA', name: 'Argelia', source: require('./../../../assets/flags/dz.png')},
	{code: 'ARG', name: 'Argentina', source: require('./../../../assets/flags/ar.png')},
	{code: 'ARM', name: 'Armenia', source: require('./../../../assets/flags/am.png')},
	{code: 'ABW', name: 'Aruba', source: require('./../../../assets/flags/aw.png')},
	{code: 'AUS', name: 'Australia', source: require('./../../../assets/flags/au.png')},
	{code: 'AUT', name: 'Austria', source: require('./../../../assets/flags/at.png')},
	{code: 'AZE', name: 'Azerbaiyán', source: require('./../../../assets/flags/az.png')},
	{code: 'BHS', name: 'Bahamas ', source: require('./../../../assets/flags/bs.png')},
	{code: 'BGD', name: 'Bangladés', source: require('./../../../assets/flags/bd.png')},
	{code: 'BRB', name: 'Barbados', source: require('./../../../assets/flags/bb.png')},
	{code: 'BHR', name: 'Baréin', source: require('./../../../assets/flags/bh.png')},
	{code: 'BLR', name: 'Belarús', source: require('./../../../assets/flags/by.png')},
	{code: 'BEL', name: 'Bélgica', source: require('./../../../assets/flags/be.png')},
	{code: 'BLZ', name: 'Belice', source: require('./../../../assets/flags/bz.png')},
	{code: 'BEN', name: 'Benín', source: require('./../../../assets/flags/bj.png')},
	{code: 'BMU', name: 'Bermudas', source: require('./../../../assets/flags/bm.png')},
	{code: 'BTN', name: 'Bhután', source: require('./../../../assets/flags/bt.png')},
	{code: 'BOL', name: 'Bolivia ', source: require('./../../../assets/flags/bo.png')},
	{code: 'BES', name: 'Bonaire, San Eustaquio y Saba', source: require('./../../../assets/flags/bq.png')},
	{code: 'BIH', name: 'Bosnia y Herzegovina', source: require('./../../../assets/flags/ba.png')},
	{code: 'BWA', name: 'Botsuana', source: require('./../../../assets/flags/bw.png')},
	{code: 'BVT', name: 'Bouvet, Isla', source: require('./../../../assets/flags/bv.png')},
	{code: 'BRA', name: 'Brasil', source: require('./../../../assets/flags/br.png')},
	{code: 'BRN', name: 'Brunéi Darussalam', source: require('./../../../assets/flags/bn.png')},
	{code: 'BGR', name: 'Bulgaria', source: require('./../../../assets/flags/bg.png')},
	{code: 'BFA', name: 'Burkina Faso', source: require('./../../../assets/flags/bf.png')},
	{code: 'BDI', name: 'Burundi', source: require('./../../../assets/flags/bi.png')},
	{code: 'CPV', name: 'Cabo Verde', source: require('./../../../assets/flags/cv.png')},
	{code: 'CYM', name: 'Caimán,  Islas', source: require('./../../../assets/flags/ky.png')},
	{code: 'KHM', name: 'Camboya', source: require('./../../../assets/flags/kh.png')},
	{code: 'CMR', name: 'Camerún', source: require('./../../../assets/flags/cm.png')},
	{code: 'CAN', name: 'Canadá', source: require('./../../../assets/flags/ca.png')},
	{code: 'QAT', name: 'Catar', source: require('./../../../assets/flags/qa.png')},
	{code: 'TCD', name: 'Chad', source: require('./../../../assets/flags/td.png')},
	{code: 'CZE', name: 'Chequia', source: require('./../../../assets/flags/cz.png')},
	{code: 'CHL', name: 'Chile', source: require('./../../../assets/flags/cl.png')},
	{code: 'CHN', name: 'China', source: require('./../../../assets/flags/cn.png')},
	{code: 'CYP', name: 'Chipre', source: require('./../../../assets/flags/cy.png')},
	{code: 'CCK', name: 'Cocos / Keeling,  Islas', source: require('./../../../assets/flags/cc.png')},
	{code: 'COL', name: 'Colombia', source: require('./../../../assets/flags/co.png')},
	{code: 'COM', name: 'Comoras ', source: require('./../../../assets/flags/km.png')},
	{code: 'COG', name: 'Congo ', source: require('./../../../assets/flags/cg.png')},
	{code: 'COK', name: 'Cook,  Islas', source: require('./../../../assets/flags/ck.png')},
	{code: 'KOR', name: 'Corea ', source: require('./../../../assets/flags/kr.png')},
	{code: 'CRI', name: 'Costa Rica', source: require('./../../../assets/flags/cr.png')},
	{code: 'CIV', name: 'Côte d\'Ivoire', source: require('./../../../assets/flags/ci.png')},
	{code: 'HRV', name: 'Croacia', source: require('./../../../assets/flags/hr.png')},
	{code: 'CUB', name: 'Cuba', source: require('./../../../assets/flags/cu.png')},
	{code: 'CUW', name: 'Curaçao', source: require('./../../../assets/flags/cw.png')},
	{code: 'DNK', name: 'Dinamarca', source: require('./../../../assets/flags/dk.png')},
	{code: 'DMA', name: 'Dominica', source: require('./../../../assets/flags/dm.png')},
	{code: 'DOM', name: 'Dominicana,  República', source: require('./../../../assets/flags/do.png')},
	{code: 'ECU', name: 'Ecuador', source: require('./../../../assets/flags/ec.png')},
	{code: 'EGY', name: 'Egipto', source: require('./../../../assets/flags/eg.png')},
	{code: 'SLV', name: 'El Salvador', source: require('./../../../assets/flags/sv.png')},
	{code: 'ARE', name: 'Emiratos Árabes Unidos ', source: require('./../../../assets/flags/ae.png')},
	{code: 'ERI', name: 'Eritrea', source: require('./../../../assets/flags/er.png')},
	{code: 'SVK', name: 'Eslovaquia', source: require('./../../../assets/flags/sk.png')},
	{code: 'SVN', name: 'Eslovenia', source: require('./../../../assets/flags/si.png')},
	{code: 'ESP', name: 'España', source: require('./../../../assets/flags/es.png')},
	{code: 'USA', name: 'Estados Unidos de América ', source: require('./../../../assets/flags/us.png')},
	{code: 'EST', name: 'Estonia', source: require('./../../../assets/flags/ee.png')},
	{code: 'ETH', name: 'Etiopía', source: require('./../../../assets/flags/et.png')},
	{code: 'FRO', name: 'Feroe,  Islas', source: require('./../../../assets/flags/fo.png')},
	{code: 'PHL', name: 'Filipinas ', source: require('./../../../assets/flags/ph.png')},
	{code: 'FIN', name: 'Finlandia', source: require('./../../../assets/flags/fi.png')},
	{code: 'FJI', name: 'Fiyi', source: require('./../../../assets/flags/fj.png')},
	{code: 'FRA', name: 'Francia', source: require('./../../../assets/flags/fr.png')},
	{code: 'GAB', name: 'Gabón', source: require('./../../../assets/flags/ga.png')},
	{code: 'GMB', name: 'Gambia ', source: require('./../../../assets/flags/gm.png')},
	{code: 'SGS', name: 'Georgia del Sur  y las Islas Sandwich del Sur', source: require('./../../../assets/flags/gs.png')},
	{code: 'GEO', name: 'Georgia', source: require('./../../../assets/flags/ge.png')},
	{code: 'GHA', name: 'Ghana', source: require('./../../../assets/flags/gh.png')},
	{code: 'GIB', name: 'Gibraltar', source: require('./../../../assets/flags/gi.png')},
	{code: 'GRD', name: 'Granada', source: require('./../../../assets/flags/gd.png')},
	{code: 'GRC', name: 'Grecia', source: require('./../../../assets/flags/gr.png')},
	{code: 'GRL', name: 'Groenlandia', source: require('./../../../assets/flags/gl.png')},
	{code: 'GLP', name: 'Guadeloupe', source: require('./../../../assets/flags/gp.png')},
	{code: 'GUM', name: 'Guam', source: require('./../../../assets/flags/gu.png')},
	{code: 'GTM', name: 'Guatemala', source: require('./../../../assets/flags/gt.png')},
	{code: 'GUF', name: 'Guayana Francesa', source: require('./../../../assets/flags/gf.png')},
	{code: 'GGY', name: 'Guernsey', source: require('./../../../assets/flags/gg.png')},
	{code: 'GNB', name: 'Guinea Bissau', source: require('./../../../assets/flags/gw.png')},
	{code: 'GNQ', name: 'Guinea Ecuatorial', source: require('./../../../assets/flags/gq.png')},
	{code: 'GIN', name: 'Guinea', source: require('./../../../assets/flags/gn.png')},
	{code: 'GUY', name: 'Guyana', source: require('./../../../assets/flags/gy.png')},
	{code: 'HTI', name: 'Haití', source: require('./../../../assets/flags/ht.png')},
	{code: 'HMD', name: 'Heard  e Islas McDonald', source: require('./../../../assets/flags/hm.png')},
	{code: 'HND', name: 'Honduras', source: require('./../../../assets/flags/hn.png')},
	{code: 'HKG', name: 'Hong Kong', source: require('./../../../assets/flags/hk.png')},
	{code: 'HUN', name: 'Hungría', source: require('./../../../assets/flags/hu.png')},
	{code: 'IND', name: 'India', source: require('./../../../assets/flags/in.png')},
	{code: 'IDN', name: 'Indonesia', source: require('./../../../assets/flags/id.png')},
	{code: 'IRQ', name: 'Irak', source: require('./../../../assets/flags/iq.png')},
	{code: 'IRN', name: 'Irán ', source: require('./../../../assets/flags/ir.png')},
	{code: 'IRL', name: 'Irlanda', source: require('./../../../assets/flags/ie.png')},
	{code: 'IMN', name: 'Isla de Man', source: require('./../../../assets/flags/im.png')},
	{code: 'ISL', name: 'Islandia', source: require('./../../../assets/flags/is.png')},
	{code: 'UMI', name: 'Islas Ultramarinas Menores de los Estados Unidos ', source: require('./../../../assets/flags/um.png')},
	{code: 'ISR', name: 'Israel', source: require('./../../../assets/flags/il.png')},
	{code: 'ITA', name: 'Italia', source: require('./../../../assets/flags/it.png')},
	{code: 'JAM', name: 'Jamaica', source: require('./../../../assets/flags/jm.png')},
	{code: 'JPN', name: 'Japón', source: require('./../../../assets/flags/jp.png')},
	{code: 'JEY', name: 'Jersey', source: require('./../../../assets/flags/je.png')},
	{code: 'JOR', name: 'Jordania', source: require('./../../../assets/flags/jo.png')},
	{code: 'KAZ', name: 'Kazajistán', source: require('./../../../assets/flags/kz.png')},
	{code: 'KEN', name: 'Kenia', source: require('./../../../assets/flags/ke.png')},
	{code: 'KGZ', name: 'Kirguistán', source: require('./../../../assets/flags/kg.png')},
	{code: 'KIR', name: 'Kiribati', source: require('./../../../assets/flags/ki.png')},
	{code: 'KWT', name: 'Kuwait', source: require('./../../../assets/flags/kw.png')},
	{code: 'LAO', name: 'Lao,  República Democrática Popular', source: require('./../../../assets/flags/la.png')},
	{code: 'LSO', name: 'Lesoto', source: require('./../../../assets/flags/ls.png')},
	{code: 'LVA', name: 'Letonia', source: require('./../../../assets/flags/lv.png')},
	{code: 'LBN', name: 'Líbano', source: require('./../../../assets/flags/lb.png')},
	{code: 'LBR', name: 'Liberia', source: require('./../../../assets/flags/lr.png')},
	{code: 'LBY', name: 'Libia', source: require('./../../../assets/flags/ly.png')},
	{code: 'LIE', name: 'Liechtenstein', source: require('./../../../assets/flags/li.png')},
	{code: 'LTU', name: 'Lituania', source: require('./../../../assets/flags/lt.png')},
	{code: 'LUX', name: 'Luxemburgo', source: require('./../../../assets/flags/lu.png')},
	{code: 'MAC', name: 'Macao', source: require('./../../../assets/flags/mo.png')},
	{code: 'MKD', name: 'Macedonia del Norte', source: require('./../../../assets/flags/mk.png')},
	{code: 'MDG', name: 'Madagascar', source: require('./../../../assets/flags/mg.png')},
	{code: 'MYS', name: 'Malasia', source: require('./../../../assets/flags/my.png')},
	{code: 'MWI', name: 'Malawi', source: require('./../../../assets/flags/mw.png')},
	{code: 'MDV', name: 'Maldivas', source: require('./../../../assets/flags/mv.png')},
	{code: 'MLI', name: 'Malí', source: require('./../../../assets/flags/ml.png')},
	{code: 'MLT', name: 'Malta', source: require('./../../../assets/flags/mt.png')},
	{code: 'FLK', name: 'Malvinas [Falkland],  Islas', source: require('./../../../assets/flags/fk.png')},
	{code: 'MNP', name: 'Marianas del Norte,  Islas', source: require('./../../../assets/flags/mp.png')},
	{code: 'MAR', name: 'Marruecos', source: require('./../../../assets/flags/ma.png')},
	{code: 'MHL', name: 'Marshall,  Islas', source: require('./../../../assets/flags/mh.png')},
	{code: 'MTQ', name: 'Martinique', source: require('./../../../assets/flags/mq.png')},
	{code: 'MUS', name: 'Mauricio', source: require('./../../../assets/flags/mu.png')},
	{code: 'MRT', name: 'Mauritania', source: require('./../../../assets/flags/mr.png')},
	{code: 'MYT', name: 'Mayotte', source: require('./../../../assets/flags/yt.png')},
	{code: 'MEX', name: 'México', source: require('./../../../assets/flags/mx.png')},
	{code: 'FSM', name: 'Micronesia ', source: require('./../../../assets/flags/fm.png')},
	{code: 'MDA', name: 'Moldavia ', source: require('./../../../assets/flags/md.png')},
	{code: 'MCO', name: 'Mónaco', source: require('./../../../assets/flags/mc.png')},
	{code: 'MNG', name: 'Mongolia', source: require('./../../../assets/flags/mn.png')},
	{code: 'MNE', name: 'Montenegro', source: require('./../../../assets/flags/me.png')},
	{code: 'MSR', name: 'Montserrat', source: require('./../../../assets/flags/ms.png')},
	{code: 'MOZ', name: 'Mozambique', source: require('./../../../assets/flags/mz.png')},
	{code: 'MMR', name: 'Myanmar', source: require('./../../../assets/flags/mm.png')},
	{code: 'NAM', name: 'Namibia', source: require('./../../../assets/flags/na.png')},
	{code: 'NRU', name: 'Nauru', source: require('./../../../assets/flags/nr.png')},
	{code: 'CXR', name: 'Navidad, Isla de', source: require('./../../../assets/flags/cx.png')},
	{code: 'NPL', name: 'Nepal', source: require('./../../../assets/flags/np.png')},
	{code: 'NIC', name: 'Nicaragua', source: require('./../../../assets/flags/ni.png')},
	{code: 'NER', name: 'Níger ', source: require('./../../../assets/flags/ne.png')},
	{code: 'NGA', name: 'Nigeria', source: require('./../../../assets/flags/ng.png')},
	{code: 'NIU', name: 'Niue', source: require('./../../../assets/flags/nu.png')},
	{code: 'NFK', name: 'Norfolk, Isla', source: require('./../../../assets/flags/nf.png')},
	{code: 'NOR', name: 'Noruega', source: require('./../../../assets/flags/no.png')},
	{code: 'NCL', name: 'Nueva Caledonia', source: require('./../../../assets/flags/nc.png')},
	{code: 'NZL', name: 'Nueva Zelandia', source: require('./../../../assets/flags/nz.png')},
	{code: 'OMN', name: 'Omán', source: require('./../../../assets/flags/om.png')},
	{code: 'NLD', name: 'Países Bajos ', source: require('./../../../assets/flags/nl.png')},
	{code: 'PAK', name: 'Pakistán', source: require('./../../../assets/flags/pk.png')},
	{code: 'PLW', name: 'Palaos', source: require('./../../../assets/flags/pw.png')},
	{code: 'PSE', name: 'Palestina, Estado de', source: require('./../../../assets/flags/ps.png')},
	{code: 'PAN', name: 'Panamá', source: require('./../../../assets/flags/pa.png')},
	{code: 'PNG', name: 'Papúa Nueva Guinea', source: require('./../../../assets/flags/pg.png')},
	{code: 'PRY', name: 'Paraguay', source: require('./../../../assets/flags/py.png')},
	{code: 'PER', name: 'Perú', source: require('./../../../assets/flags/pe.png')},
	{code: 'PCN', name: 'Pitcairn', source: require('./../../../assets/flags/pn.png')},
	{code: 'PYF', name: 'Polinesia Francesa', source: require('./../../../assets/flags/pf.png')},
	{code: 'POL', name: 'Polonia', source: require('./../../../assets/flags/pl.png')},
	{code: 'PRT', name: 'Portugal', source: require('./../../../assets/flags/pt.png')},
	{code: 'PRI', name: 'Puerto Rico', source: require('./../../../assets/flags/pr.png')},
	{code: 'GBR', name: 'Reino Unido de Gran Bretaña e Irlanda del Norte ', source: require('./../../../assets/flags/gb.png')},
	{code: 'SYR', name: 'República Árabe Siria', source: require('./../../../assets/flags/sy.png')},
	{code: 'CAF', name: 'República Centroafricana ', source: require('./../../../assets/flags/cf.png')},
	{code: 'COD', name: 'República Democrática del Congo', source: require('./../../../assets/flags/cd.png')},
	{code: 'PRK', name: 'República Popular Democrática de Corea', source: require('./../../../assets/flags/kp.png')},
	{code: 'REU', name: 'Reunión', source: require('./../../../assets/flags/re.png')},
	{code: 'RWA', name: 'Ruanda', source: require('./../../../assets/flags/rw.png')},
	{code: 'ROU', name: 'Rumania', source: require('./../../../assets/flags/ro.png')},
	{code: 'RUS', name: 'Rusia,  Federación de', source: require('./../../../assets/flags/ru.png')},
	{code: 'ESH', name: 'Sahara Occidental', source: require('./../../../assets/flags/eh.png')},
	{code: 'BLM', name: 'Saint Barthélemy', source: require('./../../../assets/flags/bl.png')},
	{code: 'MAF', name: 'Saint Martin ', source: require('./../../../assets/flags/mf.png')},
	{code: 'SLB', name: 'Salomón, Islas', source: require('./../../../assets/flags/sb.png')},
	{code: 'ASM', name: 'Samoa Americana', source: require('./../../../assets/flags/as.png')},
	{code: 'WSM', name: 'Samoa', source: require('./../../../assets/flags/ws.png')},
	{code: 'KNA', name: 'San Cristóbal y Nieves', source: require('./../../../assets/flags/kn.png')},
	{code: 'SMR', name: 'San Marino', source: require('./../../../assets/flags/sm.png')},
	{code: 'SPM', name: 'San Pedro y Miquelón', source: require('./../../../assets/flags/pm.png')},
	{code: 'VCT', name: 'San Vicente y las Granadinas', source: require('./../../../assets/flags/vc.png')},
	{code: 'SHN', name: 'Santa Helena, Ascensión y Tristán de Acuña', source: require('./../../../assets/flags/sh.png')},
	{code: 'LCA', name: 'Santa Lucía', source: require('./../../../assets/flags/lc.png')},
	{code: 'VAT', name: 'Santa Sede ', source: require('./../../../assets/flags/va.png')},
	{code: 'STP', name: 'Santo Tomé y Príncipe', source: require('./../../../assets/flags/st.png')},
	{code: 'SEN', name: 'Senegal', source: require('./../../../assets/flags/sn.png')},
	{code: 'SRB', name: 'Serbia', source: require('./../../../assets/flags/rs.png')},
	{code: 'SYC', name: 'Seychelles', source: require('./../../../assets/flags/sc.png')},
	{code: 'SLE', name: 'Sierra leona', source: require('./../../../assets/flags/sl.png')},
	{code: 'SGP', name: 'Singapur', source: require('./../../../assets/flags/sg.png')},
	{code: 'SXM', name: 'Sint Maarten ', source: require('./../../../assets/flags/sx.png')},
	{code: 'SOM', name: 'Somalia', source: require('./../../../assets/flags/so.png')},
	{code: 'LKA', name: 'Sri Lanka', source: require('./../../../assets/flags/lk.png')},
	{code: 'SWZ', name: 'Suazilandia', source: require('./../../../assets/flags/sz.png')},
	{code: 'ZAF', name: 'Sudáfrica', source: require('./../../../assets/flags/za.png')},
	{code: 'SSD', name: 'Sudán del Sur', source: require('./../../../assets/flags/ss.png')},
	{code: 'SDN', name: 'Sudán ', source: require('./../../../assets/flags/sd.png')},
	{code: 'SWE', name: 'Suecia', source: require('./../../../assets/flags/se.png')},
	{code: 'CHE', name: 'Suiza', source: require('./../../../assets/flags/ch.png')},
	{code: 'SUR', name: 'Suriname', source: require('./../../../assets/flags/sr.png')},
	{code: 'SJM', name: 'Svalbard y Jan Mayen', source: require('./../../../assets/flags/sj.png')},
	{code: 'THA', name: 'Tailandia', source: require('./../../../assets/flags/th.png')},
	{code: 'TWN', name: 'Taiwán ', source: require('./../../../assets/flags/tw.png')},
	{code: 'TZA', name: 'Tanzania, República Unida de', source: require('./../../../assets/flags/tz.png')},
	{code: 'TJK', name: 'Tayikistán', source: require('./../../../assets/flags/tj.png')},
	{code: 'IOT', name: 'Territorio Británico del Océano Índico ', source: require('./../../../assets/flags/io.png')},
	{code: 'ATF', name: 'Tierras Australes Francesas ', source: require('./../../../assets/flags/tf.png')},
	{code: 'TLS', name: 'Timor-Leste', source: require('./../../../assets/flags/tl.png')},
	{code: 'TGO', name: 'Togo', source: require('./../../../assets/flags/tg.png')},
	{code: 'TKL', name: 'Tokelau', source: require('./../../../assets/flags/tk.png')},
	{code: 'TON', name: 'Tonga', source: require('./../../../assets/flags/to.png')},
	{code: 'TTO', name: 'Trinidad y Tobago', source: require('./../../../assets/flags/tt.png')},
	{code: 'TUN', name: 'Túnez', source: require('./../../../assets/flags/tn.png')},
	{code: 'TCA', name: 'Turcas y Caicos,  Islas', source: require('./../../../assets/flags/tc.png')},
	{code: 'TKM', name: 'Turkmenistán', source: require('./../../../assets/flags/tm.png')},
	{code: 'TUR', name: 'Turquía', source: require('./../../../assets/flags/tr.png')},
	{code: 'TUV', name: 'Tuvalu', source: require('./../../../assets/flags/tv.png')},
	{code: 'UKR', name: 'Ucrania', source: require('./../../../assets/flags/ua.png')},
	{code: 'UGA', name: 'Uganda', source: require('./../../../assets/flags/ug.png')},
	{code: 'URY', name: 'Uruguay', source: require('./../../../assets/flags/uy.png')},
	{code: 'UZB', name: 'Uzbekistán', source: require('./../../../assets/flags/uz.png')},
	{code: 'VUT', name: 'Vanuatu', source: require('./../../../assets/flags/vu.png')},
	{code: 'VEN', name: 'Venezuela ', source: require('./../../../assets/flags/ve.png')},
	{code: 'VNM', name: 'Viet Nam', source: require('./../../../assets/flags/vn.png')},
	{code: 'VGB', name: 'Vírgenes británicas, Islas', source: require('./../../../assets/flags/vg.png')},
	{code: 'VIR', name: 'Vírgenes de los Estados Unidos, Islas', source: require('./../../../assets/flags/vi.png')},
	{code: 'WLF', name: 'Wallis y Futuna', source: require('./../../../assets/flags/wf.png')},
	{code: 'YEM', name: 'Yemen', source: require('./../../../assets/flags/ye.png')},
	{code: 'DJI', name: 'Yibuti', source: require('./../../../assets/flags/dj.png')},
	{code: 'ZMB', name: 'Zambia', source: require('./../../../assets/flags/zm.png')},
	{code: 'ZWE', name: 'Zimbabue', source: require('./../../../assets/flags/zw.png')}
];

const HomeScreen: () => Node = () => {
	const [userData, setUserData] = useState(JSON.parse(storage.getString('AFG')));
	const [modalVisibleCountries, setModalVisibleCountries] = useState(false);

	// Store one position at the beginning
	useEffect(() => {
		if (storagePositions.getAllKeys().length == 0) {
			Geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					storePositionData(latitude, longitude, Date.now());
				},
				(error) => {
					// See error code charts below.
					console.log(error.code, error.message);
				},
				{ enableHighAccuracy: true, maximumAge: 1, distanceFilter: 1 }
			);
		}
	}, []);

	// To display notifications (background or foreground)
	async function onDisplayNotification() {
		const goals = await getGoals();
		const daysLeftYear = await getDaysLeftYear();

		if (daysLeftYear > DAYS_LEFT_YEAR_NOTIFY) {
			return;
		}

		let bodyText = '';

		if (goals.length > 1) {
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y te falta pasar:';
			
			goals.forEach(goal => {
				bodyText = bodyText + '\n' + '- ' + goal.daysLeft + ' días en ' + COUNTRIES_DATA[goal.countryCode].name;
			});
			
		} else if (goals.length == 1) {
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y te falta pasar ' + goals[0].daysLeft + ' días en ' + COUNTRIES_DATA[goals[0].countryCode].name;
		} else if (goals.length == 0) {
			bodyText = '¡Atención! Quedan ' + daysLeftYear + ' días para finalizar el año y no has establecido ningún objetivo';
		}



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
			id: daysLeftYear.toString(),
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

	// Save positions that have been stored in storage
	async function updatePositionsData() {
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

	async function initUpdate() {
		let millisecondsDatesKeys = storagePositions.getAllKeys();
		let millisecondsNow = Date.now();

		if (millisecondsDatesKeys.length == 1) {
			const hoursElapsed = (millisecondsNow - parseInt(millisecondsDatesKeys[0], 10)) * 2.77778 * Math.pow(10, -7);

			// At least FRECUENCY_HOURS should have elapsed
			if (hoursElapsed >= FRECUENCY_HOURS) {
				Geolocation.getCurrentPosition(
					(position) => {
						const latitude = position.coords.latitude;
						const longitude = position.coords.longitude;

						storePositionData(latitude, longitude, millisecondsNow);
					},
					(error) => {
						// See error code charts below.
						console.log(error.code, error.message);
					},
					{ enableHighAccuracy: true, maximumAge: 1, distanceFilter: 1 }
				);
			}
		} 
		updatePositionsData();
	};


	// Activates when internet is on to update data
	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			var timeoutIdDisplay;
			var timeoutIdUpdate;
			if (state.isInternetReachable) {
				console.log('internet is on');
				clearTimeout(timeoutIdUpdate);
				timeoutId = setTimeout(initUpdate, 10000);
			} else {
				console.log('internet is off');
				clearTimeout(timeoutIdUpdate);
			}

			clearTimeout(timeoutIdDisplay);
			timeoutIdDisplay = setTimeout(onDisplayNotification, 12000);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	// Foreground events of notifications
	useEffect(() => {
		return notifee.onForegroundEvent(({ type, detail }) => {
			switch (type) {
				case EventType.PRESS:
					setUserData(JSON.parse(storage.getString(detail.notification.id)));
			}
		});
	}, []);

	// Background events of notifications
	const appState = useRef(AppState.currentState);
	const [appStateVisible, setAppStateVisible] = useState(appState.current);

	useEffect(() => {
		const subscription = AppState.addEventListener("change", nextAppState => {
			if (appState.current.match(/inactive|background/) && nextAppState === "active") {
				console.log("App has come to the foreground!");
				if (storageNotifications.contains('notification')) {
					const countryCodeNotification = storageNotifications.getString('notification');
					const userDataItem = JSON.parse(storage.getString(countryCodeNotification));
					setUserData(userDataItem);
					storageNotifications.delete('notification');	
				}
			}

			appState.current = nextAppState;
			setAppStateVisible(appState.current);
			console.log("AppState", appState.current);
		});

		return () => {
			subscription.remove();
		};
	}, []);

	async function getDaysLeftYear() {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const endYear = new Date(currentYear, 11, 31);
		const daysLeftYear = (endYear.getTime() - currentDate.getTime()) * 1.15741 * Math.pow(10, -8);

		return daysLeftYear;
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

	async function storePositionData(latitude, longitude, millisecondsDate) {
		storagePositions.set(millisecondsDate.toString(), JSON.stringify({latitude: latitude, longitude: longitude}));
	}

	// Background task
	async function backgroundTask() {

		//For current location
		Geolocation.getCurrentPosition(
			(position) => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;

				storePositionData(latitude, longitude, Date.now());
			},
			(error) => {
				// See error code charts below.
				console.log(error.code, error.message);
			},
			{ enableHighAccuracy: true, maximumAge: 1, distanceFilter: 1 }
		);

		const state = await NetInfo.fetch();

		if (state.isInternetReachable) {
			updatePositionsData();
		}

		onDisplayNotification();
	}

	// Background tasks
	useEffect(() => {
		async function initBackgroundFetch() {
			const onEvent = async (taskId) => {
				console.log('[BackgroundFetch] task: ', taskId);
				// Do your background work...

				await backgroundTask();	

				// IMPORTANT:  You must signal to the OS that your task is complete.
				BackgroundFetch.finish(taskId);
			}

			const onTimeout = async (taskId) => {
				console.warn('[BackgroundFetch] TIMEOUT task: ', taskId);
				BackgroundFetch.finish(taskId);
			}

			let status = await BackgroundFetch.configure({minimumFetchInterval: FRECUENCY_HOURS * 60, stopOnTerminate: false, forceAlarmManager: true, enableHeadless: true}, onEvent, onTimeout);

			if (status == 0) {
				console.log("Restricted");
			} else if (status == 1) {
				console.log("Denied");
			} else if (status == 2) {
				console.log("Available");
			}
		}

		initBackgroundFetch();

	}, []);

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
	};

	const isDarkMode = useColorScheme() === 'dark';

	// Animations
	const loaderValue = useRef(new Animated.Value(0)).current;

	const load = (days, maximumDays) => {
		Animated.timing(loaderValue, {
			toValue: isFinite(Math.round(days * 100 / maximumDays)) ? Math.round(days * 100 / maximumDays) : 0,
			duration: 1000,
			useNativeDriver: false
		}).start();
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity key={item.code} style={{paddingBottom: 8}} onPress={() => {setUserData(JSON.parse(storage.getString(item.code))); setModalVisibleCountries(false); load(JSON.parse(storage.getString(item.code)).days, JSON.parse(storage.getString(item.code)).maximumDays);}}>
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
		<Image style={styles.flag} source={item.source}/>
		<Text style={{color: '#2c2c2c', fontSize: 15, marginLeft: 15}}>{item.name}</Text>
		</View>
		</TouchableOpacity>
	);
	
	return (
		<LinearGradient style={styles.container} colors={['#1e2818', '#020304']}>
		<SafeAreaView>
		<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
		<View style={{alignItems: 'center'}}>
		<Text style={styles.text}>Tus días en </Text>
		<TouchableOpacity onPress={() => {setModalVisibleCountries(true);}}>
		<Text style={[styles.text, {fontWeight: 'bold'} ]}>{COUNTRIES_DATA[userData.countryCode].name}</Text>
		</TouchableOpacity>
		<Modal
		visible={modalVisibleCountries}
		transparent={true}
		animationType='fade'
		onRequestClose={() => {setModalVisibleCountries(false);}}
		>
		<View style={{flex: 1, marginVertical: 15, marginHorizontal: 15, backgroundColor: 'white', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 15}}>
		<FlatList
		data={COUNTRIES_DATA_ARRAY}
		renderItem={renderItem}
		keyExtractor={item => item.code}
		initialNumToRender={50}
		maxToRenderPerBatch={50}
		/>
		</View>
		</Modal>
		<Image style={styles.flag} source={COUNTRIES_DATA[userData.countryCode].source}/>
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
		<Text style={styles.text}>{userData.days.toString()}/</Text>
		<TextInput
		style={[styles.text, {fontWeight: 'bold'} ]}
		value={userData.maximumDays.toString()}
		onChangeText={newMaximumDays => {
			const regex = /[^\d]/g;

			if (newMaximumDays == '') {
				newMaximumDays = '0';
			} else if (regex.test(newMaximumDays)) {
				newMaximumDays = newMaximumDays.replace(regex, '');
			}

			newMaximumDays = parseInt(newMaximumDays);

			storage.set(userData.countryCode, JSON.stringify({countryCode: userData.countryCode, days: userData.days, maximumDays: newMaximumDays})); 
			setUserData({...userData, maximumDays: newMaximumDays});
			load(userData.days, newMaximumDays);
		}}
		keyboardType={'number-pad'}
		/>
		</View>
		<View>
		<Text style={[styles.text, {fontSize: 15} ]}>{isFinite(Math.round(userData.days * 100 / userData.maximumDays)) ? Math.round(userData.days * 100 / userData.maximumDays) : 0}%</Text>
		<View style={styles.progressBar}>
		<Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: '#8BED4F', width: loaderValue.interpolate({inputRange: [0,100], outputRange: ['0%','100%'], extrapolate: 'clamp'})}}/>
		</View>
		</View>
		</View>
		</SafeAreaView>
		</LinearGradient>
	);
	
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: '#eeefef', 
		fontSize: 25
	},
	flag: {
		width: 50, 
		height: 50, 
		borderRadius: 25, 
		borderColor: '#000000', 
		borderWidth: 0.5	
	},
	progressBar: {
		height: 20,
		width: 200,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 5
	}
});

export default HomeScreen;
