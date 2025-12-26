// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockAmber: ClockThemeDefinition = {
	name: "clock/amber",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.amber50,
		onBackground: MaterialColors.black,
		dot: "#af4c00ff",
		onDot: MaterialColors.white,
	},
	dark: {
		background: "#311500ff",
		onBackground: MaterialColors.white,
		dot: MaterialColors.amber700,
		onDot: MaterialColors.white,
	},
};

export default ClockAmber;