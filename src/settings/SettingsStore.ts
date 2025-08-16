// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { NamedSubscriberStore } from "../lib/NamedSubscriberStore";

export interface Setting<Value extends number | boolean> {
	default: Value;
	validate: (value: Value) => boolean;
	update: (value: Value) => Promise<void>;
	read: () => Promise<Value>;
}

export type Settings = Record<string, Setting<number> | Setting<boolean>>;

export class SettingsStore<S extends Settings> extends NamedSubscriberStore<{[K in keyof S]: S[K]['default']}> {
	settings: S;
	constructor(settings: S) {
		const defaults = Object.fromEntries(
			Object.entries(settings).map(([key, value]) => [key, value.default])
		)
		// @ts-expect-error Object.fromEntries is type-lossy
		super(defaults)
		this.settings = settings;
	}
	protected isValidUpdate<K extends keyof S>(setting: K, value: S[K]["default"]): boolean {
		// @ts-expect-error TypeScript messed up while following all this indirection
		return this.settings[setting].validate(value);
	}
	protected onUpdate<K extends keyof S>(setting: K, value: S[K]["default"]): void {
		// @ts-expect-error TypeScript messed up while following all this indirection
		this.settings[setting].update(value);
	}
}