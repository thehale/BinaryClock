// Copyright (c) 2026 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { Squares, styles } from "react-native-expressive";
import { DEFAULT_SETTINGS } from "../settings/definitions";
import BinaryDot from "./BinaryDot";
import { View } from "react-native";

const BITS = [
	{ active: false, value: 8, visible: true },
	{ active: true, value: 4, visible: true },
	{ active: true, value: 2, visible: true },
	{ active: true, value: 1, visible: true },
]

const DEFAULTS = {
	brightness: DEFAULT_SETTINGS.brightness,
	roundness: DEFAULT_SETTINGS.roundness,
	showHints: false,
};

export default function MiniClock() {
	return (
		<Squares rows={2} columns={2} flow={{ origin: 'top-left', direction: 'column' }}>
			{BITS.map((bit, index) => (
				<View key={index} style={[styles.layout.centered, styles.layout.filled]}>
					<BinaryDot bit={bit} {...DEFAULTS} />
				</View>
			))}
		</Squares>
	);
}