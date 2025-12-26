// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockBrown: ClockThemeDefinition = {
	name: "clock/brown",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.white,
		onBackground: MaterialColors.brown900,
		dot: MaterialColors.brown400,
		onDot: MaterialColors.white,
	},
	dark: {
		background: MaterialColors.grey900,
		onBackground: MaterialColors.white,
		dot: MaterialColors.brown500,
		onDot: MaterialColors.white,
	},
};

export default ClockBrown;