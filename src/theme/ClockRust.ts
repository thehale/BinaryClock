// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockRust: ClockThemeDefinition = {
	name: "clock/rust",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.deepOrange50,
		onBackground: MaterialColors.black,
		dot: MaterialColors.deepOrange900,
		onDot: MaterialColors.white,
	},
	dark: {
		background: "#270800ff",
		onBackground: MaterialColors.deepOrange50,
		dot: MaterialColors.deepOrange600,
		onDot: MaterialColors.deepOrange50,
	},
};

export default ClockRust;