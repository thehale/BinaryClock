// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { debounce, DebouncedFunc } from 'lodash';
import DefaultPreference from 'react-native-default-preference';

const setters = new Map<string, DebouncedFunc<(value: string) => Promise<void>>>();

async function put(key: string, value: string): Promise<void> {
	if (!setters.has(key)) {
		const setter = async (value: string) => await DefaultPreference.set(key, value);
		setters.set(key, debounce(setter, 1000, { trailing: true }));
	}
	return setters.get(key)!(value);
}

async function read(key: string, defaultValue: string): Promise<string> {
	const value = await DefaultPreference.get(key);
	return value ?? defaultValue;
}

export default { put, read };