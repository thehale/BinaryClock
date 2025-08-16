// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { Settings, Setting } from "./SettingsStore"
import KVStore from '../lib/KeyValueStore';

export const settings = {
	/** `0`% to`1`00% brightness (e.g. `0.5` is 50% brightness) */
	brightness: {
		default: 1,
		validate: (value: number) => value >= 0 && value <= 1,
		update: async (value: number) => KVStore.put('brightness', value.toString()),
		read: async () => Number(await KVStore.read('brightness', '1'))
	} satisfies Setting<number>,

	/** `0`% to`1`00% roundness (e.g. `0.5` is 50% roundness) */
	roundness: {
		default: 1,
		validate: (value: number) => value >= 0 && value <= 1,
		update: async (value: number) => KVStore.put('roundness', value.toString()),
		read: async () => Number(await KVStore.read('roundness', '1'))
	} satisfies Setting<number>,

	/** `true` shows the value of each dot, `false` does not. */
	showHints: {
		default: true as boolean,
		validate: (value: boolean) => typeof value === 'boolean',
		update: async (value: boolean) => KVStore.put('showHints', value.toString()),
		read: async () => (await KVStore.read('showHints', 'false')) === 'true'
	} satisfies Setting<boolean>,
} satisfies Settings;