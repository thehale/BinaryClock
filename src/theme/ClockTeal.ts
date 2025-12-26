// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockTeal: ClockThemeDefinition = {
	name: "clock/teal",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.white,
		onBackground: MaterialColors.teal900,
		dot: MaterialColors.teal700,
		onDot: MaterialColors.teal100,
	},
	dark: {
		background: "#00241eff",
		onBackground: MaterialColors.teal50,
		dot: MaterialColors.teal400,
		onDot: MaterialColors.teal50,
	},
};

export default ClockTeal;