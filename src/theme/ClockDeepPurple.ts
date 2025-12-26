// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockDeepPurple: ClockThemeDefinition = {
	name: "clock/deep-purple",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.purple50,
		onBackground: MaterialColors.black,
		dot: MaterialColors.deepPurple600,
		onDot: MaterialColors.white,
	},
	dark: {
		background: MaterialColors.black,
		onBackground: MaterialColors.white,
		dot: MaterialColors.deepPurple600,
		onDot: MaterialColors.white,
	},
};

export default ClockDeepPurple;