// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import DefaultPreference from 'react-native-default-preference';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function migrate() {
	const migrationDate = await DefaultPreference.get("migrationDate");

	if (migrationDate === null || migrationDate === undefined) {
		await executeMigration();
		await DefaultPreference.set("migrationDate", new Date().toISOString());
	}
}

async function executeMigration() {
	const brightness = (await DefaultPreference.get("brightness")) ?? "1"
	const roundness = (await DefaultPreference.get("roundness")) ?? "1"
	const showHints = (await DefaultPreference.get("showHints")) ?? "false"

	await AsyncStorage.setItem("brightness", brightness);
	await AsyncStorage.setItem("roundness", roundness);
	await AsyncStorage.setItem("showHints", showHints);
}