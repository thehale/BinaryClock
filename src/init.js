// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { initSettings } from './settings/useSettings';
import BootSplash from 'react-native-bootsplash';

export async function init() {
	await initSettings();
	BootSplash.hide({ fade: true }) // Hide the splash screen until after all other initialization is complete
}