// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockYellow: ClockThemeDefinition = {
	name: "clock/yellow",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.yellow50,
		onBackground: MaterialColors.black,
		dot: MaterialColors.yellow700,
		onDot: MaterialColors.black,
	},
	dark: {
		background: MaterialColors.grey900,
		onBackground: MaterialColors.white,
		dot: "#f5e506ff",
		onDot: MaterialColors.grey900,
	},
};

export default ClockYellow;