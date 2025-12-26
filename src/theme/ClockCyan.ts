// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockCyan: ClockThemeDefinition = {
	name: "clock/cyan",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.white,
		onBackground: MaterialColors.blueGrey800,
		dot: MaterialColors.cyan700,
		onDot: MaterialColors.white,
	},
	dark: {
		background: MaterialColors.black,
		onBackground: MaterialColors.blueGrey100,
		dot: MaterialColors.cyan600,
		onDot: MaterialColors.blue100,
	},
};

export default ClockCyan;