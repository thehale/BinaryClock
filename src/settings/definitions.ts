// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { Settings, Setting } from "react-native-expressive";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DEFAULT_SETTINGS = {
	brightness: 1,
	roundness: 1,
	showHints: false,
}

export const definitions = {
	/** `0`% to`1`00% brightness (e.g. `0.5` is 50% brightness) */
	brightness: {
		default: DEFAULT_SETTINGS.brightness,
		validate: (value: number) => value >= 0 && value <= 1,
		update: async (value: number) => await AsyncStorage.setItem('brightness', value.toString()),
		read: async () => Number(await AsyncStorage.getItem('brightness') ?? DEFAULT_SETTINGS.brightness)
	} satisfies Setting<number>,

	/** `0`% to`1`00% roundness (e.g. `0.5` is 50% roundness) */
	roundness: {
		default: DEFAULT_SETTINGS.roundness,
		validate: (value: number) => value >= 0 && value <= 1,
		update: async (value: number) => await AsyncStorage.setItem('roundness', value.toString()),
		read: async () => Number(await AsyncStorage.getItem('roundness') ?? DEFAULT_SETTINGS.roundness)
	} satisfies Setting<number>,

	/** `true` shows the value of each dot, `false` does not. */
	showHints: {
		default: DEFAULT_SETTINGS.showHints,
		validate: (value: boolean) => typeof value === 'boolean',
		update: async (value: boolean) => await AsyncStorage.setItem('showHints', value.toString()),
		read: async () => (await AsyncStorage.getItem('showHints') ?? DEFAULT_SETTINGS.showHints) === 'true'
	} satisfies Setting<boolean>,
} satisfies Settings;
