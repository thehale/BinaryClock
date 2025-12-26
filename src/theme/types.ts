// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import type { Theme, ThemeColors, ThemeDefinition, ThemeFonts } from "react-native-expressive";

export interface ClockTheme extends Theme<ClockThemeColors> {
	fonts: ThemeFonts;
	colors: ClockThemeColors;
}

export interface ClockThemeDefinition extends ThemeDefinition<ClockThemeColors> {
	fonts: ThemeFonts;
	dark: ClockThemeColors;
	light: ClockThemeColors;
}

export interface ClockThemeColors extends ThemeColors {
	background: string;
	onBackground: string;
	dot: string;
	onDot: string;
}
