// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockLightGreen: ClockThemeDefinition = {
	name: "clock/light-green",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.lightGreen50,
		onBackground: MaterialColors.lightGreen800,
		dot: MaterialColors.lightGreen700,
		onDot: MaterialColors.lightGreen50,
	},
	dark: {
		background: "#1e3d12ff",
		onBackground: MaterialColors.lightGreen50,
		dot: MaterialColors.lightGreen700,
		onDot: MaterialColors.lightGreen50,
	},
};

export default ClockLightGreen;