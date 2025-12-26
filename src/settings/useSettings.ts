// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { createSettings } from "react-native-expressive";
import type { Settings, Setting } from "react-native-expressive";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const definitions = {
	/** `0`% to`1`00% brightness (e.g. `0.5` is 50% brightness) */
	brightness: {
		default: 1,
		validate: (value: number) => value >= 0 && value <= 1,
		update: async (value: number) => await AsyncStorage.setItem('brightness', value.toString()),
		read: async () => Number(await AsyncStorage.getItem('brightness') ?? '1')
	} satisfies Setting<number>,

	/** `0`% to`1`00% roundness (e.g. `0.5` is 50% roundness) */
	roundness: {
		default: 1,
		validate: (value: number) => value >= 0 && value <= 1,
		update: async (value: number) => await AsyncStorage.setItem('roundness', value.toString()),
		read: async () => Number(await AsyncStorage.getItem('roundness') ?? '1')
	} satisfies Setting<number>,

	/** `true` shows the value of each dot, `false` does not. */
	showHints: {
		default: false as boolean,
		validate: (value: boolean) => typeof value === 'boolean',
		update: async (value: boolean) => await AsyncStorage.setItem('showHints', value.toString()),
		read: async () => (await AsyncStorage.getItem('showHints') ?? 'false') === 'true'
	} satisfies Setting<boolean>,
} satisfies Settings;

const { initSettings, useSettings } = createSettings(definitions);

export { initSettings, useSettings };