// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockGreen: ClockThemeDefinition = {
	name: "clock/green",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.green50,
		onBackground: MaterialColors.green900,
		dot: MaterialColors.green600,
		onDot: MaterialColors.green50,
	},
	dark: {
		background: "#071a09ff",
		onBackground: MaterialColors.green50,
		dot: MaterialColors.green800,
		onDot: MaterialColors.green50,
	},
};

export default ClockGreen;