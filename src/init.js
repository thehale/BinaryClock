// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { initSettings } from './settings/useSettings';
import BootSplash from 'react-native-bootsplash';
import migrate_DefaultPreference_to_AsyncStorage from './migrations/DefaultPreference_to_AsyncStorage';

export async function init() {
	await migrate_DefaultPreference_to_AsyncStorage()
	await initSettings();
	BootSplash.hide({ fade: true }) // Hide the splash screen until after all other initialization is complete
}
