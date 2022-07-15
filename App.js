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
	Image	
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV();

if (storage.getBoolean('hasBeenOpened') == undefined) {
	storage.set('hasBeenOpened', true);
	storage.set('AF', JSON.stringify({countryCode: 'AF', days: 80, maximumDays: 0}));
	storage.set('AX', JSON.stringify({countryCode: 'AX', days: 40, maximumDays: 0}));
	storage.set('AL', JSON.stringify({countryCode: 'AL', days: 0, maximumDays: 0}));
	storage.set('DE', JSON.stringify({countryCode: 'DE', days: 0, maximumDays: 0}));
	storage.set('AD', JSON.stringify({countryCode: 'AD', days: 0, maximumDays: 0}));
	storage.set('AO', JSON.stringify({countryCode: 'AO', days: 0, maximumDays: 0}));
	storage.set('AI', JSON.stringify({countryCode: 'AI', days: 0, maximumDays: 0}));
	storage.set('AQ', JSON.stringify({countryCode: 'AQ', days: 0, maximumDays: 0}));
	storage.set('AG', JSON.stringify({countryCode: 'AG', days: 0, maximumDays: 0}));
	storage.set('SA', JSON.stringify({countryCode: 'SA', days: 0, maximumDays: 0}));
	storage.set('DZ', JSON.stringify({countryCode: 'DZ', days: 0, maximumDays: 0}));
	storage.set('AR', JSON.stringify({countryCode: 'AR', days: 0, maximumDays: 0}));
	storage.set('AM', JSON.stringify({countryCode: 'AM', days: 0, maximumDays: 0}));
	storage.set('AW', JSON.stringify({countryCode: 'AW', days: 0, maximumDays: 0}));
	storage.set('AU', JSON.stringify({countryCode: 'AU', days: 0, maximumDays: 0}));
	storage.set('AT', JSON.stringify({countryCode: 'AT', days: 0, maximumDays: 0}));
	storage.set('AZ', JSON.stringify({countryCode: 'AZ', days: 0, maximumDays: 0}));
	storage.set('BS', JSON.stringify({countryCode: 'BS', days: 0, maximumDays: 0}));
	storage.set('BD', JSON.stringify({countryCode: 'BD', days: 0, maximumDays: 0}));
	storage.set('BB', JSON.stringify({countryCode: 'BB', days: 0, maximumDays: 0}));
	storage.set('BH', JSON.stringify({countryCode: 'BH', days: 0, maximumDays: 0}));
	storage.set('BY', JSON.stringify({countryCode: 'BY', days: 0, maximumDays: 0}));
	storage.set('BE', JSON.stringify({countryCode: 'BE', days: 0, maximumDays: 0}));
	storage.set('BZ', JSON.stringify({countryCode: 'BZ', days: 0, maximumDays: 0}));
	storage.set('BJ', JSON.stringify({countryCode: 'BJ', days: 0, maximumDays: 0}));
	storage.set('BM', JSON.stringify({countryCode: 'BM', days: 0, maximumDays: 0}));
	storage.set('BT', JSON.stringify({countryCode: 'BT', days: 0, maximumDays: 0}));
	storage.set('BO', JSON.stringify({countryCode: 'BO', days: 0, maximumDays: 0}));
	storage.set('BQ', JSON.stringify({countryCode: 'BQ', days: 0, maximumDays: 0}));
	storage.set('BA', JSON.stringify({countryCode: 'BA', days: 0, maximumDays: 0}));
	storage.set('BW', JSON.stringify({countryCode: 'BW', days: 0, maximumDays: 0}));
	storage.set('BV', JSON.stringify({countryCode: 'BV', days: 0, maximumDays: 0}));
	storage.set('BR', JSON.stringify({countryCode: 'BR', days: 0, maximumDays: 0}));
	storage.set('BN', JSON.stringify({countryCode: 'BN', days: 0, maximumDays: 0}));
	storage.set('BG', JSON.stringify({countryCode: 'BG', days: 0, maximumDays: 0}));
	storage.set('BF', JSON.stringify({countryCode: 'BF', days: 0, maximumDays: 0}));
	storage.set('BI', JSON.stringify({countryCode: 'BI', days: 0, maximumDays: 0}));
	storage.set('CV', JSON.stringify({countryCode: 'CV', days: 0, maximumDays: 0}));
	storage.set('KY', JSON.stringify({countryCode: 'KY', days: 0, maximumDays: 0}));
	storage.set('KH', JSON.stringify({countryCode: 'KH', days: 0, maximumDays: 0}));
	storage.set('CM', JSON.stringify({countryCode: 'CM', days: 0, maximumDays: 0}));
	storage.set('CA', JSON.stringify({countryCode: 'CA', days: 0, maximumDays: 0}));
	storage.set('QA', JSON.stringify({countryCode: 'QA', days: 0, maximumDays: 0}));
	storage.set('TD', JSON.stringify({countryCode: 'TD', days: 0, maximumDays: 0}));
	storage.set('CZ', JSON.stringify({countryCode: 'CZ', days: 0, maximumDays: 0}));
	storage.set('CL', JSON.stringify({countryCode: 'CL', days: 0, maximumDays: 0}));
	storage.set('CN', JSON.stringify({countryCode: 'CN', days: 0, maximumDays: 0}));
	storage.set('CY', JSON.stringify({countryCode: 'CY', days: 0, maximumDays: 0}));
	storage.set('CC', JSON.stringify({countryCode: 'CC', days: 0, maximumDays: 0}));
	storage.set('CO', JSON.stringify({countryCode: 'CO', days: 0, maximumDays: 0}));
	storage.set('KM', JSON.stringify({countryCode: 'KM', days: 0, maximumDays: 0}));
	storage.set('CG', JSON.stringify({countryCode: 'CG', days: 0, maximumDays: 0}));
	storage.set('CK', JSON.stringify({countryCode: 'CK', days: 0, maximumDays: 0}));
	storage.set('KR', JSON.stringify({countryCode: 'KR', days: 0, maximumDays: 0}));
	storage.set('CR', JSON.stringify({countryCode: 'CR', days: 0, maximumDays: 0}));
	storage.set('CI', JSON.stringify({countryCode: 'CI', days: 0, maximumDays: 0}));
	storage.set('HR', JSON.stringify({countryCode: 'HR', days: 0, maximumDays: 0}));
	storage.set('CU', JSON.stringify({countryCode: 'CU', days: 0, maximumDays: 0}));
	storage.set('CW', JSON.stringify({countryCode: 'CW', days: 0, maximumDays: 0}));
	storage.set('DK', JSON.stringify({countryCode: 'DK', days: 0, maximumDays: 0}));
	storage.set('DM', JSON.stringify({countryCode: 'DM', days: 0, maximumDays: 0}));
	storage.set('DO', JSON.stringify({countryCode: 'DO', days: 0, maximumDays: 0}));
	storage.set('EC', JSON.stringify({countryCode: 'EC', days: 0, maximumDays: 0}));
	storage.set('EG', JSON.stringify({countryCode: 'EG', days: 0, maximumDays: 0}));
	storage.set('SV', JSON.stringify({countryCode: 'SV', days: 0, maximumDays: 0}));
	storage.set('AE', JSON.stringify({countryCode: 'AE', days: 0, maximumDays: 0}));
	storage.set('ER', JSON.stringify({countryCode: 'ER', days: 0, maximumDays: 0}));
	storage.set('SK', JSON.stringify({countryCode: 'SK', days: 0, maximumDays: 0}));
	storage.set('SI', JSON.stringify({countryCode: 'SI', days: 0, maximumDays: 0}));
	storage.set('ES', JSON.stringify({countryCode: 'ES', days: 0, maximumDays: 0}));
	storage.set('US', JSON.stringify({countryCode: 'US', days: 0, maximumDays: 0}));
	storage.set('EE', JSON.stringify({countryCode: 'EE', days: 0, maximumDays: 0}));
	storage.set('ET', JSON.stringify({countryCode: 'ET', days: 0, maximumDays: 0}));
	storage.set('FO', JSON.stringify({countryCode: 'FO', days: 0, maximumDays: 0}));
	storage.set('PH', JSON.stringify({countryCode: 'PH', days: 0, maximumDays: 0}));
	storage.set('FI', JSON.stringify({countryCode: 'FI', days: 0, maximumDays: 0}));
	storage.set('FJ', JSON.stringify({countryCode: 'FJ', days: 0, maximumDays: 0}));
	storage.set('FR', JSON.stringify({countryCode: 'FR', days: 0, maximumDays: 0}));
	storage.set('GA', JSON.stringify({countryCode: 'GA', days: 0, maximumDays: 0}));
	storage.set('GM', JSON.stringify({countryCode: 'GM', days: 0, maximumDays: 0}));
	storage.set('GS', JSON.stringify({countryCode: 'GS', days: 0, maximumDays: 0}));
	storage.set('GE', JSON.stringify({countryCode: 'GE', days: 0, maximumDays: 0}));
	storage.set('GH', JSON.stringify({countryCode: 'GH', days: 0, maximumDays: 0}));
	storage.set('GI', JSON.stringify({countryCode: 'GI', days: 0, maximumDays: 0}));
	storage.set('GD', JSON.stringify({countryCode: 'GD', days: 0, maximumDays: 0}));
	storage.set('GR', JSON.stringify({countryCode: 'GR', days: 0, maximumDays: 0}));
	storage.set('GL', JSON.stringify({countryCode: 'GL', days: 0, maximumDays: 0}));
	storage.set('GP', JSON.stringify({countryCode: 'GP', days: 0, maximumDays: 0}));
	storage.set('GU', JSON.stringify({countryCode: 'GU', days: 0, maximumDays: 0}));
	storage.set('GT', JSON.stringify({countryCode: 'GT', days: 0, maximumDays: 0}));
	storage.set('GF', JSON.stringify({countryCode: 'GF', days: 0, maximumDays: 0}));
	storage.set('GG', JSON.stringify({countryCode: 'GG', days: 0, maximumDays: 0}));
	storage.set('GW', JSON.stringify({countryCode: 'GW', days: 0, maximumDays: 0}));
	storage.set('GQ', JSON.stringify({countryCode: 'GQ', days: 0, maximumDays: 0}));
	storage.set('GN', JSON.stringify({countryCode: 'GN', days: 0, maximumDays: 0}));
	storage.set('GY', JSON.stringify({countryCode: 'GY', days: 0, maximumDays: 0}));
	storage.set('HT', JSON.stringify({countryCode: 'HT', days: 0, maximumDays: 0}));
	storage.set('HM', JSON.stringify({countryCode: 'HM', days: 0, maximumDays: 0}));
	storage.set('HN', JSON.stringify({countryCode: 'HN', days: 0, maximumDays: 0}));
	storage.set('HK', JSON.stringify({countryCode: 'HK', days: 0, maximumDays: 0}));
	storage.set('HU', JSON.stringify({countryCode: 'HU', days: 0, maximumDays: 0}));
	storage.set('IN', JSON.stringify({countryCode: 'IN', days: 0, maximumDays: 0}));
	storage.set('ID', JSON.stringify({countryCode: 'ID', days: 0, maximumDays: 0}));
	storage.set('IQ', JSON.stringify({countryCode: 'IQ', days: 0, maximumDays: 0}));
	storage.set('IR', JSON.stringify({countryCode: 'IR', days: 0, maximumDays: 0}));
	storage.set('IE', JSON.stringify({countryCode: 'IE', days: 0, maximumDays: 0}));
	storage.set('IM', JSON.stringify({countryCode: 'IM', days: 0, maximumDays: 0}));
	storage.set('IS', JSON.stringify({countryCode: 'IS', days: 0, maximumDays: 0}));
	storage.set('UM', JSON.stringify({countryCode: 'UM', days: 0, maximumDays: 0}));
	storage.set('IL', JSON.stringify({countryCode: 'IL', days: 0, maximumDays: 0}));
	storage.set('IT', JSON.stringify({countryCode: 'IT', days: 0, maximumDays: 0}));
	storage.set('JM', JSON.stringify({countryCode: 'JM', days: 0, maximumDays: 0}));
	storage.set('JP', JSON.stringify({countryCode: 'JP', days: 0, maximumDays: 0}));
	storage.set('JE', JSON.stringify({countryCode: 'JE', days: 0, maximumDays: 0}));
	storage.set('JO', JSON.stringify({countryCode: 'JO', days: 0, maximumDays: 0}));
	storage.set('KZ', JSON.stringify({countryCode: 'KZ', days: 0, maximumDays: 0}));
	storage.set('KE', JSON.stringify({countryCode: 'KE', days: 0, maximumDays: 0}));
	storage.set('KG', JSON.stringify({countryCode: 'KG', days: 0, maximumDays: 0}));
	storage.set('KI', JSON.stringify({countryCode: 'KI', days: 0, maximumDays: 0}));
	storage.set('KW', JSON.stringify({countryCode: 'KW', days: 0, maximumDays: 0}));
	storage.set('LA', JSON.stringify({countryCode: 'LA', days: 0, maximumDays: 0}));
	storage.set('LS', JSON.stringify({countryCode: 'LS', days: 0, maximumDays: 0}));
	storage.set('LV', JSON.stringify({countryCode: 'LV', days: 0, maximumDays: 0}));
	storage.set('LB', JSON.stringify({countryCode: 'LB', days: 0, maximumDays: 0}));
	storage.set('LR', JSON.stringify({countryCode: 'LR', days: 0, maximumDays: 0}));
	storage.set('LY', JSON.stringify({countryCode: 'LY', days: 0, maximumDays: 0}));
	storage.set('LI', JSON.stringify({countryCode: 'LI', days: 0, maximumDays: 0}));
	storage.set('LT', JSON.stringify({countryCode: 'LT', days: 0, maximumDays: 0}));
	storage.set('LU', JSON.stringify({countryCode: 'LU', days: 0, maximumDays: 0}));
	storage.set('MO', JSON.stringify({countryCode: 'MO', days: 0, maximumDays: 0}));
	storage.set('MK', JSON.stringify({countryCode: 'MK', days: 0, maximumDays: 0}));
	storage.set('MG', JSON.stringify({countryCode: 'MG', days: 0, maximumDays: 0}));
	storage.set('MY', JSON.stringify({countryCode: 'MY', days: 0, maximumDays: 0}));
	storage.set('MW', JSON.stringify({countryCode: 'MW', days: 0, maximumDays: 0}));
	storage.set('MV', JSON.stringify({countryCode: 'MV', days: 0, maximumDays: 0}));
	storage.set('ML', JSON.stringify({countryCode: 'ML', days: 0, maximumDays: 0}));
	storage.set('MT', JSON.stringify({countryCode: 'MT', days: 0, maximumDays: 0}));
	storage.set('FK', JSON.stringify({countryCode: 'FK', days: 0, maximumDays: 0}));
	storage.set('MP', JSON.stringify({countryCode: 'MP', days: 0, maximumDays: 0}));
	storage.set('MA', JSON.stringify({countryCode: 'MA', days: 0, maximumDays: 0}));
	storage.set('MH', JSON.stringify({countryCode: 'MH', days: 0, maximumDays: 0}));
	storage.set('MQ', JSON.stringify({countryCode: 'MQ', days: 0, maximumDays: 0}));
	storage.set('MU', JSON.stringify({countryCode: 'MU', days: 0, maximumDays: 0}));
	storage.set('MR', JSON.stringify({countryCode: 'MR', days: 0, maximumDays: 0}));
	storage.set('YT', JSON.stringify({countryCode: 'YT', days: 0, maximumDays: 0}));
	storage.set('MX', JSON.stringify({countryCode: 'MX', days: 0, maximumDays: 0}));
	storage.set('FM', JSON.stringify({countryCode: 'FM', days: 0, maximumDays: 0}));
	storage.set('MD', JSON.stringify({countryCode: 'MD', days: 0, maximumDays: 0}));
	storage.set('MC', JSON.stringify({countryCode: 'MC', days: 0, maximumDays: 0}));
	storage.set('MN', JSON.stringify({countryCode: 'MN', days: 0, maximumDays: 0}));
	storage.set('ME', JSON.stringify({countryCode: 'ME', days: 0, maximumDays: 0}));
	storage.set('MS', JSON.stringify({countryCode: 'MS', days: 0, maximumDays: 0}));
	storage.set('MZ', JSON.stringify({countryCode: 'MZ', days: 0, maximumDays: 0}));
	storage.set('MM', JSON.stringify({countryCode: 'MM', days: 0, maximumDays: 0}));
	storage.set('NA', JSON.stringify({countryCode: 'NA', days: 0, maximumDays: 0}));
	storage.set('NR', JSON.stringify({countryCode: 'NR', days: 0, maximumDays: 0}));
	storage.set('CX', JSON.stringify({countryCode: 'CX', days: 0, maximumDays: 0}));
	storage.set('NP', JSON.stringify({countryCode: 'NP', days: 0, maximumDays: 0}));
	storage.set('NI', JSON.stringify({countryCode: 'NI', days: 0, maximumDays: 0}));
	storage.set('NE', JSON.stringify({countryCode: 'NE', days: 0, maximumDays: 0}));
	storage.set('NG', JSON.stringify({countryCode: 'NG', days: 0, maximumDays: 0}));
	storage.set('NU', JSON.stringify({countryCode: 'NU', days: 0, maximumDays: 0}));
	storage.set('NF', JSON.stringify({countryCode: 'NF', days: 0, maximumDays: 0}));
	storage.set('NO', JSON.stringify({countryCode: 'NO', days: 0, maximumDays: 0}));
	storage.set('NC', JSON.stringify({countryCode: 'NC', days: 0, maximumDays: 0}));
	storage.set('NZ', JSON.stringify({countryCode: 'NZ', days: 0, maximumDays: 0}));
	storage.set('OM', JSON.stringify({countryCode: 'OM', days: 0, maximumDays: 0}));
	storage.set('NL', JSON.stringify({countryCode: 'NL', days: 0, maximumDays: 0}));
	storage.set('PK', JSON.stringify({countryCode: 'PK', days: 0, maximumDays: 0}));
	storage.set('PW', JSON.stringify({countryCode: 'PW', days: 0, maximumDays: 0}));
	storage.set('PS', JSON.stringify({countryCode: 'PS', days: 0, maximumDays: 0}));
	storage.set('PA', JSON.stringify({countryCode: 'PA', days: 0, maximumDays: 0}));
	storage.set('PG', JSON.stringify({countryCode: 'PG', days: 0, maximumDays: 0}));
	storage.set('PY', JSON.stringify({countryCode: 'PY', days: 0, maximumDays: 0}));
	storage.set('PE', JSON.stringify({countryCode: 'PE', days: 0, maximumDays: 0}));
	storage.set('PN', JSON.stringify({countryCode: 'PN', days: 0, maximumDays: 0}));
	storage.set('PF', JSON.stringify({countryCode: 'PF', days: 0, maximumDays: 0}));
	storage.set('PL', JSON.stringify({countryCode: 'PL', days: 0, maximumDays: 0}));
	storage.set('PT', JSON.stringify({countryCode: 'PT', days: 0, maximumDays: 0}));
	storage.set('PR', JSON.stringify({countryCode: 'PR', days: 0, maximumDays: 0}));
	storage.set('GB', JSON.stringify({countryCode: 'GB', days: 0, maximumDays: 0}));
	storage.set('SY', JSON.stringify({countryCode: 'SY', days: 0, maximumDays: 0}));
	storage.set('CF', JSON.stringify({countryCode: 'CF', days: 0, maximumDays: 0}));
	storage.set('CD', JSON.stringify({countryCode: 'CD', days: 0, maximumDays: 0}));
	storage.set('KP', JSON.stringify({countryCode: 'KP', days: 0, maximumDays: 0}));
	storage.set('RE', JSON.stringify({countryCode: 'RE', days: 0, maximumDays: 0}));
	storage.set('RW', JSON.stringify({countryCode: 'RW', days: 0, maximumDays: 0}));
	storage.set('RO', JSON.stringify({countryCode: 'RO', days: 0, maximumDays: 0}));
	storage.set('RU', JSON.stringify({countryCode: 'RU', days: 0, maximumDays: 0}));
	storage.set('EH', JSON.stringify({countryCode: 'EH', days: 0, maximumDays: 0}));
	storage.set('BL', JSON.stringify({countryCode: 'BL', days: 0, maximumDays: 0}));
	storage.set('MF', JSON.stringify({countryCode: 'MF', days: 0, maximumDays: 0}));
	storage.set('SB', JSON.stringify({countryCode: 'SB', days: 0, maximumDays: 0}));
	storage.set('AS', JSON.stringify({countryCode: 'AS', days: 0, maximumDays: 0}));
	storage.set('WS', JSON.stringify({countryCode: 'WS', days: 0, maximumDays: 0}));
	storage.set('KN', JSON.stringify({countryCode: 'KN', days: 0, maximumDays: 0}));
	storage.set('SM', JSON.stringify({countryCode: 'SM', days: 0, maximumDays: 0}));
	storage.set('PM', JSON.stringify({countryCode: 'PM', days: 0, maximumDays: 0}));
	storage.set('VC', JSON.stringify({countryCode: 'VC', days: 0, maximumDays: 0}));
	storage.set('SH', JSON.stringify({countryCode: 'SH', days: 0, maximumDays: 0}));
	storage.set('LC', JSON.stringify({countryCode: 'LC', days: 0, maximumDays: 0}));
	storage.set('VA', JSON.stringify({countryCode: 'VA', days: 0, maximumDays: 0}));
	storage.set('ST', JSON.stringify({countryCode: 'ST', days: 0, maximumDays: 0}));
	storage.set('SN', JSON.stringify({countryCode: 'SN', days: 0, maximumDays: 0}));
	storage.set('RS', JSON.stringify({countryCode: 'RS', days: 0, maximumDays: 0}));
	storage.set('SC', JSON.stringify({countryCode: 'SC', days: 0, maximumDays: 0}));
	storage.set('SL', JSON.stringify({countryCode: 'SL', days: 0, maximumDays: 0}));
	storage.set('SG', JSON.stringify({countryCode: 'SG', days: 0, maximumDays: 0}));
	storage.set('SX', JSON.stringify({countryCode: 'SX', days: 0, maximumDays: 0}));
	storage.set('SO', JSON.stringify({countryCode: 'SO', days: 0, maximumDays: 0}));
	storage.set('LK', JSON.stringify({countryCode: 'LK', days: 0, maximumDays: 0}));
	storage.set('SZ', JSON.stringify({countryCode: 'SZ', days: 0, maximumDays: 0}));
	storage.set('ZA', JSON.stringify({countryCode: 'ZA', days: 0, maximumDays: 0}));
	storage.set('SS', JSON.stringify({countryCode: 'SS', days: 0, maximumDays: 0}));
	storage.set('SD', JSON.stringify({countryCode: 'SD', days: 0, maximumDays: 0}));
	storage.set('SE', JSON.stringify({countryCode: 'SE', days: 0, maximumDays: 0}));
	storage.set('CH', JSON.stringify({countryCode: 'CH', days: 0, maximumDays: 0}));
	storage.set('SR', JSON.stringify({countryCode: 'SR', days: 0, maximumDays: 0}));
	storage.set('SJ', JSON.stringify({countryCode: 'SJ', days: 0, maximumDays: 0}));
	storage.set('TH', JSON.stringify({countryCode: 'TH', days: 0, maximumDays: 0}));
	storage.set('TW', JSON.stringify({countryCode: 'TW', days: 0, maximumDays: 0}));
	storage.set('TZ', JSON.stringify({countryCode: 'TZ', days: 0, maximumDays: 0}));
	storage.set('TJ', JSON.stringify({countryCode: 'TJ', days: 0, maximumDays: 0}));
	storage.set('IO', JSON.stringify({countryCode: 'IO', days: 0, maximumDays: 0}));
	storage.set('TF', JSON.stringify({countryCode: 'TF', days: 0, maximumDays: 0}));
	storage.set('TL', JSON.stringify({countryCode: 'TL', days: 0, maximumDays: 0}));
	storage.set('TG', JSON.stringify({countryCode: 'TG', days: 0, maximumDays: 0}));
	storage.set('TK', JSON.stringify({countryCode: 'TK', days: 0, maximumDays: 0}));
	storage.set('TO', JSON.stringify({countryCode: 'TO', days: 0, maximumDays: 0}));
	storage.set('TT', JSON.stringify({countryCode: 'TT', days: 0, maximumDays: 0}));
	storage.set('TN', JSON.stringify({countryCode: 'TN', days: 0, maximumDays: 0}));
	storage.set('TC', JSON.stringify({countryCode: 'TC', days: 0, maximumDays: 0}));
	storage.set('TM', JSON.stringify({countryCode: 'TM', days: 0, maximumDays: 0}));
	storage.set('TR', JSON.stringify({countryCode: 'TR', days: 0, maximumDays: 0}));
	storage.set('TV', JSON.stringify({countryCode: 'TV', days: 0, maximumDays: 0}));
	storage.set('UA', JSON.stringify({countryCode: 'UA', days: 0, maximumDays: 0}));
	storage.set('UG', JSON.stringify({countryCode: 'UG', days: 0, maximumDays: 0}));
	storage.set('UY', JSON.stringify({countryCode: 'UY', days: 0, maximumDays: 0}));
	storage.set('UZ', JSON.stringify({countryCode: 'UZ', days: 0, maximumDays: 0}));
	storage.set('VU', JSON.stringify({countryCode: 'VU', days: 0, maximumDays: 0}));
	storage.set('VE', JSON.stringify({countryCode: 'VE', days: 0, maximumDays: 0}));
	storage.set('VN', JSON.stringify({countryCode: 'VN', days: 0, maximumDays: 0}));
	storage.set('VG', JSON.stringify({countryCode: 'VG', days: 0, maximumDays: 0}));
	storage.set('VI', JSON.stringify({countryCode: 'VI', days: 0, maximumDays: 0}));
	storage.set('WF', JSON.stringify({countryCode: 'WF', days: 0, maximumDays: 0}));
	storage.set('YE', JSON.stringify({countryCode: 'YE', days: 0, maximumDays: 0}));
	storage.set('DJ', JSON.stringify({countryCode: 'DJ', days: 0, maximumDays: 0}));
	storage.set('ZM', JSON.stringify({countryCode: 'ZM', days: 0, maximumDays: 0}));
	storage.set('ZW', JSON.stringify({countryCode: 'ZW', days: 0, maximumDays: 0}));
}

const COUNTRIES_DATA = {
	'AF': {name: 'Afganistán', source: require('./assets/flags/af.png')},
	'AX': {name: 'Åland, Islas', source: require('./assets/flags/ax.png')},
	'AL': {name: 'Albania', source: require('./assets/flags/al.png')},
	'DE': {name: 'Alemania', source: require('./assets/flags/de.png')},
	'AD': {name: 'Andorra', source: require('./assets/flags/ad.png')},
	'AO': {name: 'Angola', source: require('./assets/flags/ao.png')},
	'AI': {name: 'Anguila', source: require('./assets/flags/ai.png')},
	'AQ': {name: 'Antártida', source: require('./assets/flags/aq.png')},
	'AG': {name: 'Antigua y Barbuda', source: require('./assets/flags/ag.png')},
	'SA': {name: 'Arabia Saudita', source: require('./assets/flags/sa.png')},
	'DZ': {name: 'Argelia', source: require('./assets/flags/dz.png')},
	'AR': {name: 'Argentina', source: require('./assets/flags/ar.png')},
	'AM': {name: 'Armenia', source: require('./assets/flags/am.png')},
	'AW': {name: 'Aruba', source: require('./assets/flags/aw.png')},
	'AU': {name: 'Australia', source: require('./assets/flags/au.png')},
	'AT': {name: 'Austria', source: require('./assets/flags/at.png')},
	'AZ': {name: 'Azerbaiyán', source: require('./assets/flags/az.png')},
	'BS': {name: 'Bahamas ', source: require('./assets/flags/bs.png')},
	'BD': {name: 'Bangladés', source: require('./assets/flags/bd.png')},
	'BB': {name: 'Barbados', source: require('./assets/flags/bb.png')},
	'BH': {name: 'Baréin', source: require('./assets/flags/bh.png')},
	'BY': {name: 'Belarús', source: require('./assets/flags/by.png')},
	'BE': {name: 'Bélgica', source: require('./assets/flags/be.png')},
	'BZ': {name: 'Belice', source: require('./assets/flags/bz.png')},
	'BJ': {name: 'Benín', source: require('./assets/flags/bj.png')},
	'BM': {name: 'Bermudas', source: require('./assets/flags/bm.png')},
	'BT': {name: 'Bhután', source: require('./assets/flags/bt.png')},
	'BO': {name: 'Bolivia ', source: require('./assets/flags/bo.png')},
	'BQ': {name: 'Bonaire, San Eustaquio y Saba', source: require('./assets/flags/bq.png')},
	'BA': {name: 'Bosnia y Herzegovina', source: require('./assets/flags/ba.png')},
	'BW': {name: 'Botsuana', source: require('./assets/flags/bw.png')},
	'BV': {name: 'Bouvet, Isla', source: require('./assets/flags/bv.png')},
	'BR': {name: 'Brasil', source: require('./assets/flags/br.png')},
	'BN': {name: 'Brunéi Darussalam', source: require('./assets/flags/bn.png')},
	'BG': {name: 'Bulgaria', source: require('./assets/flags/bg.png')},
	'BF': {name: 'Burkina Faso', source: require('./assets/flags/bf.png')},
	'BI': {name: 'Burundi', source: require('./assets/flags/bi.png')},
	'CV': {name: 'Cabo Verde', source: require('./assets/flags/cv.png')},
	'KY': {name: 'Caimán,  Islas', source: require('./assets/flags/ky.png')},
	'KH': {name: 'Camboya', source: require('./assets/flags/kh.png')},
	'CM': {name: 'Camerún', source: require('./assets/flags/cm.png')},
	'CA': {name: 'Canadá', source: require('./assets/flags/ca.png')},
	'QA': {name: 'Catar', source: require('./assets/flags/qa.png')},
	'TD': {name: 'Chad', source: require('./assets/flags/td.png')},
	'CZ': {name: 'Chequia', source: require('./assets/flags/cz.png')},
	'CL': {name: 'Chile', source: require('./assets/flags/cl.png')},
	'CN': {name: 'China', source: require('./assets/flags/cn.png')},
	'CY': {name: 'Chipre', source: require('./assets/flags/cy.png')},
	'CC': {name: 'Cocos / Keeling,  Islas', source: require('./assets/flags/cc.png')},
	'CO': {name: 'Colombia', source: require('./assets/flags/co.png')},
	'KM': {name: 'Comoras ', source: require('./assets/flags/km.png')},
	'CG': {name: 'Congo ', source: require('./assets/flags/cg.png')},
	'CK': {name: 'Cook,  Islas', source: require('./assets/flags/ck.png')},
	'KR': {name: 'Corea ', source: require('./assets/flags/kr.png')},
	'CR': {name: 'Costa Rica', source: require('./assets/flags/cr.png')},
	'CI': {name: 'Côte d\'Ivoire', source: require('./assets/flags/ci.png')},
	'HR': {name: 'Croacia', source: require('./assets/flags/hr.png')},
	'CU': {name: 'Cuba', source: require('./assets/flags/cu.png')},
	'CW': {name: 'Curaçao', source: require('./assets/flags/cw.png')},
	'DK': {name: 'Dinamarca', source: require('./assets/flags/dk.png')},
	'DM': {name: 'Dominica', source: require('./assets/flags/dm.png')},
	'DO': {name: 'Dominicana,  República', source: require('./assets/flags/do.png')},
	'EC': {name: 'Ecuador', source: require('./assets/flags/ec.png')},
	'EG': {name: 'Egipto', source: require('./assets/flags/eg.png')},
	'SV': {name: 'El Salvador', source: require('./assets/flags/sv.png')},
	'AE': {name: 'Emiratos Árabes Unidos ', source: require('./assets/flags/ae.png')},
	'ER': {name: 'Eritrea', source: require('./assets/flags/er.png')},
	'SK': {name: 'Eslovaquia', source: require('./assets/flags/sk.png')},
	'SI': {name: 'Eslovenia', source: require('./assets/flags/si.png')},
	'ES': {name: 'España', source: require('./assets/flags/es.png')},
	'US': {name: 'Estados Unidos de América ', source: require('./assets/flags/us.png')},
	'EE': {name: 'Estonia', source: require('./assets/flags/ee.png')},
	'ET': {name: 'Etiopía', source: require('./assets/flags/et.png')},
	'FO': {name: 'Feroe,  Islas', source: require('./assets/flags/fo.png')},
	'PH': {name: 'Filipinas ', source: require('./assets/flags/ph.png')},
	'FI': {name: 'Finlandia', source: require('./assets/flags/fi.png')},
	'FJ': {name: 'Fiyi', source: require('./assets/flags/fj.png')},
	'FR': {name: 'Francia', source: require('./assets/flags/fr.png')},
	'GA': {name: 'Gabón', source: require('./assets/flags/ga.png')},
	'GM': {name: 'Gambia ', source: require('./assets/flags/gm.png')},
	'GS': {name: 'Georgia del Sur  y las Islas Sandwich del Sur', source: require('./assets/flags/gs.png')},
	'GE': {name: 'Georgia', source: require('./assets/flags/ge.png')},
	'GH': {name: 'Ghana', source: require('./assets/flags/gh.png')},
	'GI': {name: 'Gibraltar', source: require('./assets/flags/gi.png')},
	'GD': {name: 'Granada', source: require('./assets/flags/gd.png')},
	'GR': {name: 'Grecia', source: require('./assets/flags/gr.png')},
	'GL': {name: 'Groenlandia', source: require('./assets/flags/gl.png')},
	'GP': {name: 'Guadeloupe', source: require('./assets/flags/gp.png')},
	'GU': {name: 'Guam', source: require('./assets/flags/gu.png')},
	'GT': {name: 'Guatemala', source: require('./assets/flags/gt.png')},
	'GF': {name: 'Guayana Francesa', source: require('./assets/flags/gf.png')},
	'GG': {name: 'Guernsey', source: require('./assets/flags/gg.png')},
	'GW': {name: 'Guinea Bissau', source: require('./assets/flags/gw.png')},
	'GQ': {name: 'Guinea Ecuatorial', source: require('./assets/flags/gq.png')},
	'GN': {name: 'Guinea', source: require('./assets/flags/gn.png')},
	'GY': {name: 'Guyana', source: require('./assets/flags/gy.png')},
	'HT': {name: 'Haití', source: require('./assets/flags/ht.png')},
	'HM': {name: 'Heard  e Islas McDonald', source: require('./assets/flags/hm.png')},
	'HN': {name: 'Honduras', source: require('./assets/flags/hn.png')},
	'HK': {name: 'Hong Kong', source: require('./assets/flags/hk.png')},
	'HU': {name: 'Hungría', source: require('./assets/flags/hu.png')},
	'IN': {name: 'India', source: require('./assets/flags/in.png')},
	'ID': {name: 'Indonesia', source: require('./assets/flags/id.png')},
	'IQ': {name: 'Irak', source: require('./assets/flags/iq.png')},
	'IR': {name: 'Irán ', source: require('./assets/flags/ir.png')},
	'IE': {name: 'Irlanda', source: require('./assets/flags/ie.png')},
	'IM': {name: 'Isla de Man', source: require('./assets/flags/im.png')},
	'IS': {name: 'Islandia', source: require('./assets/flags/is.png')},
	'UM': {name: 'Islas Ultramarinas Menores de los Estados Unidos ', source: require('./assets/flags/um.png')},
	'IL': {name: 'Israel', source: require('./assets/flags/il.png')},
	'IT': {name: 'Italia', source: require('./assets/flags/it.png')},
	'JM': {name: 'Jamaica', source: require('./assets/flags/jm.png')},
	'JP': {name: 'Japón', source: require('./assets/flags/jp.png')},
	'JE': {name: 'Jersey', source: require('./assets/flags/je.png')},
	'JO': {name: 'Jordania', source: require('./assets/flags/jo.png')},
	'KZ': {name: 'Kazajistán', source: require('./assets/flags/kz.png')},
	'KE': {name: 'Kenia', source: require('./assets/flags/ke.png')},
	'KG': {name: 'Kirguistán', source: require('./assets/flags/kg.png')},
	'KI': {name: 'Kiribati', source: require('./assets/flags/ki.png')},
	'KW': {name: 'Kuwait', source: require('./assets/flags/kw.png')},
	'LA': {name: 'Lao,  República Democrática Popular', source: require('./assets/flags/la.png')},
	'LS': {name: 'Lesoto', source: require('./assets/flags/ls.png')},
	'LV': {name: 'Letonia', source: require('./assets/flags/lv.png')},
	'LB': {name: 'Líbano', source: require('./assets/flags/lb.png')},
	'LR': {name: 'Liberia', source: require('./assets/flags/lr.png')},
	'LY': {name: 'Libia', source: require('./assets/flags/ly.png')},
	'LI': {name: 'Liechtenstein', source: require('./assets/flags/li.png')},
	'LT': {name: 'Lituania', source: require('./assets/flags/lt.png')},
	'LU': {name: 'Luxemburgo', source: require('./assets/flags/lu.png')},
	'MO': {name: 'Macao', source: require('./assets/flags/mo.png')},
	'MK': {name: 'Macedonia del Norte', source: require('./assets/flags/mk.png')},
	'MG': {name: 'Madagascar', source: require('./assets/flags/mg.png')},
	'MY': {name: 'Malasia', source: require('./assets/flags/my.png')},
	'MW': {name: 'Malawi', source: require('./assets/flags/mw.png')},
	'MV': {name: 'Maldivas', source: require('./assets/flags/mv.png')},
	'ML': {name: 'Malí', source: require('./assets/flags/ml.png')},
	'MT': {name: 'Malta', source: require('./assets/flags/mt.png')},
	'FK': {name: 'Malvinas [Falkland],  Islas', source: require('./assets/flags/fk.png')},
	'MP': {name: 'Marianas del Norte,  Islas', source: require('./assets/flags/mp.png')},
	'MA': {name: 'Marruecos', source: require('./assets/flags/ma.png')},
	'MH': {name: 'Marshall,  Islas', source: require('./assets/flags/mh.png')},
	'MQ': {name: 'Martinique', source: require('./assets/flags/mq.png')},
	'MU': {name: 'Mauricio', source: require('./assets/flags/mu.png')},
	'MR': {name: 'Mauritania', source: require('./assets/flags/mr.png')},
	'YT': {name: 'Mayotte', source: require('./assets/flags/yt.png')},
	'MX': {name: 'México', source: require('./assets/flags/mx.png')},
	'FM': {name: 'Micronesia ', source: require('./assets/flags/fm.png')},
	'MD': {name: 'Moldavia ', source: require('./assets/flags/md.png')},
	'MC': {name: 'Mónaco', source: require('./assets/flags/mc.png')},
	'MN': {name: 'Mongolia', source: require('./assets/flags/mn.png')},
	'ME': {name: 'Montenegro', source: require('./assets/flags/me.png')},
	'MS': {name: 'Montserrat', source: require('./assets/flags/ms.png')},
	'MZ': {name: 'Mozambique', source: require('./assets/flags/mz.png')},
	'MM': {name: 'Myanmar', source: require('./assets/flags/mm.png')},
	'NA': {name: 'Namibia', source: require('./assets/flags/na.png')},
	'NR': {name: 'Nauru', source: require('./assets/flags/nr.png')},
	'CX': {name: 'Navidad, Isla de', source: require('./assets/flags/cx.png')},
	'NP': {name: 'Nepal', source: require('./assets/flags/np.png')},
	'NI': {name: 'Nicaragua', source: require('./assets/flags/ni.png')},
	'NE': {name: 'Níger ', source: require('./assets/flags/ne.png')},
	'NG': {name: 'Nigeria', source: require('./assets/flags/ng.png')},
	'NU': {name: 'Niue', source: require('./assets/flags/nu.png')},
	'NF': {name: 'Norfolk, Isla', source: require('./assets/flags/nf.png')},
	'NO': {name: 'Noruega', source: require('./assets/flags/no.png')},
	'NC': {name: 'Nueva Caledonia', source: require('./assets/flags/nc.png')},
	'NZ': {name: 'Nueva Zelandia', source: require('./assets/flags/nz.png')},
	'OM': {name: 'Omán', source: require('./assets/flags/om.png')},
	'NL': {name: 'Países Bajos ', source: require('./assets/flags/nl.png')},
	'PK': {name: 'Pakistán', source: require('./assets/flags/pk.png')},
	'PW': {name: 'Palaos', source: require('./assets/flags/pw.png')},
	'PS': {name: 'Palestina, Estado de', source: require('./assets/flags/ps.png')},
	'PA': {name: 'Panamá', source: require('./assets/flags/pa.png')},
	'PG': {name: 'Papúa Nueva Guinea', source: require('./assets/flags/pg.png')},
	'PY': {name: 'Paraguay', source: require('./assets/flags/py.png')},
	'PE': {name: 'Perú', source: require('./assets/flags/pe.png')},
	'PN': {name: 'Pitcairn', source: require('./assets/flags/pn.png')},
	'PF': {name: 'Polinesia Francesa', source: require('./assets/flags/pf.png')},
	'PL': {name: 'Polonia', source: require('./assets/flags/pl.png')},
	'PT': {name: 'Portugal', source: require('./assets/flags/pt.png')},
	'PR': {name: 'Puerto Rico', source: require('./assets/flags/pr.png')},
	'GB': {name: 'Reino Unido de Gran Bretaña e Irlanda del Norte ', source: require('./assets/flags/gb.png')},
	'SY': {name: 'República Árabe Siria', source: require('./assets/flags/sy.png')},
	'CF': {name: 'República Centroafricana ', source: require('./assets/flags/cf.png')},
	'CD': {name: 'República Democrática del Congo', source: require('./assets/flags/cd.png')},
	'KP': {name: 'República Popular Democrática de Corea', source: require('./assets/flags/kp.png')},
	'RE': {name: 'Reunión', source: require('./assets/flags/re.png')},
	'RW': {name: 'Ruanda', source: require('./assets/flags/rw.png')},
	'RO': {name: 'Rumania', source: require('./assets/flags/ro.png')},
	'RU': {name: 'Rusia,  Federación de', source: require('./assets/flags/ru.png')},
	'EH': {name: 'Sahara Occidental', source: require('./assets/flags/eh.png')},
	'BL': {name: 'Saint Barthélemy', source: require('./assets/flags/bl.png')},
	'MF': {name: 'Saint Martin ', source: require('./assets/flags/mf.png')},
	'SB': {name: 'Salomón, Islas', source: require('./assets/flags/sb.png')},
	'AS': {name: 'Samoa Americana', source: require('./assets/flags/as.png')},
	'WS': {name: 'Samoa', source: require('./assets/flags/ws.png')},
	'KN': {name: 'San Cristóbal y Nieves', source: require('./assets/flags/kn.png')},
	'SM': {name: 'San Marino', source: require('./assets/flags/sm.png')},
	'PM': {name: 'San Pedro y Miquelón', source: require('./assets/flags/pm.png')},
	'VC': {name: 'San Vicente y las Granadinas', source: require('./assets/flags/vc.png')},
	'SH': {name: 'Santa Helena, Ascensión y Tristán de Acuña', source: require('./assets/flags/sh.png')},
	'LC': {name: 'Santa Lucía', source: require('./assets/flags/lc.png')},
	'VA': {name: 'Santa Sede ', source: require('./assets/flags/va.png')},
	'ST': {name: 'Santo Tomé y Príncipe', source: require('./assets/flags/st.png')},
	'SN': {name: 'Senegal', source: require('./assets/flags/sn.png')},
	'RS': {name: 'Serbia', source: require('./assets/flags/rs.png')},
	'SC': {name: 'Seychelles', source: require('./assets/flags/sc.png')},
	'SL': {name: 'Sierra leona', source: require('./assets/flags/sl.png')},
	'SG': {name: 'Singapur', source: require('./assets/flags/sg.png')},
	'SX': {name: 'Sint Maarten ', source: require('./assets/flags/sx.png')},
	'SO': {name: 'Somalia', source: require('./assets/flags/so.png')},
	'LK': {name: 'Sri Lanka', source: require('./assets/flags/lk.png')},
	'SZ': {name: 'Suazilandia', source: require('./assets/flags/sz.png')},
	'ZA': {name: 'Sudáfrica', source: require('./assets/flags/za.png')},
	'SS': {name: 'Sudán del Sur', source: require('./assets/flags/ss.png')},
	'SD': {name: 'Sudán ', source: require('./assets/flags/sd.png')},
	'SE': {name: 'Suecia', source: require('./assets/flags/se.png')},
	'CH': {name: 'Suiza', source: require('./assets/flags/ch.png')},
	'SR': {name: 'Suriname', source: require('./assets/flags/sr.png')},
	'SJ': {name: 'Svalbard y Jan Mayen', source: require('./assets/flags/sj.png')},
	'TH': {name: 'Tailandia', source: require('./assets/flags/th.png')},
	'TW': {name: 'Taiwán ', source: require('./assets/flags/tw.png')},
	'TZ': {name: 'Tanzania, República Unida de', source: require('./assets/flags/tz.png')},
	'TJ': {name: 'Tayikistán', source: require('./assets/flags/tj.png')},
	'IO': {name: 'Territorio Británico del Océano Índico ', source: require('./assets/flags/io.png')},
	'TF': {name: 'Tierras Australes Francesas ', source: require('./assets/flags/tf.png')},
	'TL': {name: 'Timor-Leste', source: require('./assets/flags/tl.png')},
	'TG': {name: 'Togo', source: require('./assets/flags/tg.png')},
	'TK': {name: 'Tokelau', source: require('./assets/flags/tk.png')},
	'TO': {name: 'Tonga', source: require('./assets/flags/to.png')},
	'TT': {name: 'Trinidad y Tobago', source: require('./assets/flags/tt.png')},
	'TN': {name: 'Túnez', source: require('./assets/flags/tn.png')},
	'TC': {name: 'Turcas y Caicos,  Islas', source: require('./assets/flags/tc.png')},
	'TM': {name: 'Turkmenistán', source: require('./assets/flags/tm.png')},
	'TR': {name: 'Turquía', source: require('./assets/flags/tr.png')},
	'TV': {name: 'Tuvalu', source: require('./assets/flags/tv.png')},
	'UA': {name: 'Ucrania', source: require('./assets/flags/ua.png')},
	'UG': {name: 'Uganda', source: require('./assets/flags/ug.png')},
	'UY': {name: 'Uruguay', source: require('./assets/flags/uy.png')},
	'UZ': {name: 'Uzbekistán', source: require('./assets/flags/uz.png')},
	'VU': {name: 'Vanuatu', source: require('./assets/flags/vu.png')},
	'VE': {name: 'Venezuela ', source: require('./assets/flags/ve.png')},
	'VN': {name: 'Viet Nam', source: require('./assets/flags/vn.png')},
	'VG': {name: 'Vírgenes británicas, Islas', source: require('./assets/flags/vg.png')},
	'VI': {name: 'Vírgenes de los Estados Unidos, Islas', source: require('./assets/flags/vi.png')},
	'WF': {name: 'Wallis y Futuna', source: require('./assets/flags/wf.png')},
	'YE': {name: 'Yemen', source: require('./assets/flags/ye.png')},
	'DJ': {name: 'Yibuti', source: require('./assets/flags/dj.png')},
	'ZM': {name: 'Zambia', source: require('./assets/flags/zm.png')},
	'ZW': {name: 'Zimbabue', source: require('./assets/flags/zw.png')}
};

const App: () => Node = () => {

	const [userData, setUserData] = useState(JSON.parse(storage.getString('AF')));
	const [modalVisibleCountries, setModalVisibleCountries] = useState(false);

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
	};

	const isDarkMode = useColorScheme() === 'dark';

	const loaderValue = useRef(new Animated.Value(0)).current;

	const load = (days, maximumDays) => {
		Animated.timing(loaderValue, {
			toValue: isFinite(Math.round(days * 100 / maximumDays)) ? Math.round(days * 100 / maximumDays) : 0,
			duration: 1000,
			useNativeDriver: false
		}).start();
	};

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
		<View style={{flex: 1, marginVertical: 15, marginHorizontal: 15, backgroundColor: 'white', borderRadius: 5, paddingHorizontal: 15}}>
		<ScrollView>
		<View style={{flex: 1, paddingHorizontal: 40, paddingVertical: 15, alignSelf: 'center'}}>
		{Object.keys(COUNTRIES_DATA).map((key, index) =>
			<TouchableOpacity key={key} style={{paddingBottom: 8}} onPress={() => {setUserData(JSON.parse(storage.getString(key))); setModalVisibleCountries(false); load(JSON.parse(storage.getString(key)).days, JSON.parse(storage.getString(key)).maximumDays);}}>
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<Image style={styles.flag} source={COUNTRIES_DATA[key].source}/>
			<Text style={{color: '#2c2c2c', fontSize: 15, marginLeft: 15}}>{COUNTRIES_DATA[key].name}</Text>
			</View>
			</TouchableOpacity>
		)}
		</View>
		</ScrollView>
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
		{/*<Text style={[styles.text, {fontSize: 15} ]}>Loading...</Text>*/}
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

export default App;
