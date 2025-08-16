// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { useCallback, useSyncExternalStore } from "react"
import { SettingsStore } from "./SettingsStore"
import { settings } from "./definitions"

const store = new SettingsStore(settings);

export async function initSettings() {
	const entries = await Promise.all(
		Object.entries(settings).map(async ([key, setting]) => [key, await setting.read()])
	);
	store.update(Object.fromEntries(entries));
}

export function useSettings(callerName: string = 'settings') {
	const subscribe = useCallback<Parameters<typeof useSyncExternalStore>[0]>((listener) => store.subscribe(callerName, listener), [store, callerName]);
	const getSnapshot = useCallback(() => store.getSnapshot(), [store]);
	const snapshot = useSyncExternalStore(subscribe, getSnapshot);
	console.log(`useSettings called by ${callerName}, current settings:`, snapshot);
	const update = (updates: Partial<typeof snapshot>) => store.update(updates);
	return [snapshot, update] as const;
}
