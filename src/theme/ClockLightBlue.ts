// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockLightBlue: ClockThemeDefinition = {
	name: "clock/light-blue",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.lightBlue50,
		onBackground: MaterialColors.blueGrey400,
		dot: MaterialColors.lightBlue400,
		onDot: MaterialColors.white,
	},
	dark: {
		background: MaterialColors.black,
		onBackground: MaterialColors.blueGrey50,
		dot: MaterialColors.lightBlue600,
		onDot: MaterialColors.white,
	},
};

export default ClockLightBlue;