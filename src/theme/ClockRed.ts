// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockRed: ClockThemeDefinition = {
	name: "clock/red",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.white,
		onBackground: MaterialColors.black,
		dot: "#cc0000ff",
		onDot: MaterialColors.white,
	},
	dark: {
		background: MaterialColors.black,
		onBackground: MaterialColors.white,
		dot: MaterialColors.redA700,
		onDot: MaterialColors.white,
	},
};

export default ClockRed;