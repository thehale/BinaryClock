// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { ClockThemeDefinition } from './types';

import { DefaultFonts, MaterialColors } from 'react-native-expressive';

const ClockLime: ClockThemeDefinition = {
	name: "clock/lime",
	fonts: DefaultFonts,
	light: {
		background: MaterialColors.lime100,
		onBackground: MaterialColors.lime800,
		dot: MaterialColors.lime800,
		onDot: MaterialColors.lime50,
	},
	dark: {
		background: "#413b0cff",
		onBackground: MaterialColors.lime50,
		dot: MaterialColors.lime800,
		onDot: MaterialColors.lime50,
	},
};

export default ClockLime;