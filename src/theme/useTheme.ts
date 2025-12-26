// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { createTheme } from "react-native-expressive";
import type { ClockThemeColors } from "./types";
import ClockHackerGreen from "./ClockHackerGreen";
import ClockRed from "./ClockRed";
import ClockPink from "./ClockPink";
import ClockPurple from "./ClockPurple";
import ClockDeepPurple from "./ClockDeepPurple";
import ClockIndigo from "./ClockIndigo";
import ClockBlue from "./ClockBlue";
import ClockLightBlue from "./ClockLightBlue";
import ClockCyan from "./ClockCyan";
import ClockTeal from "./ClockTeal";
import ClockGreen from "./ClockGreen";
import ClockLightGreen from "./ClockLightGreen";
import ClockLime from "./ClockLime";
import ClockYellow from "./ClockYellow";
import ClockAmber from "./ClockAmber";
import ClockOrange from "./ClockOrange";
import ClockRust from "./ClockRust";
import ClockBrown from "./ClockBrown";
import ClockGrey from "./ClockGrey";
import ClockBlueGrey from "./ClockBlueGrey";

const themes = [
	ClockHackerGreen, 
	ClockRed, 
	ClockPink,
	ClockPurple,
	ClockDeepPurple,
	ClockIndigo,
	ClockBlue,
	ClockLightBlue,
	ClockCyan,
	ClockTeal,
	ClockGreen,
	ClockLightGreen,
	ClockLime,
	ClockYellow,
	ClockAmber,
	ClockOrange,
	ClockRust,
	ClockBrown,
	ClockGrey,
	ClockBlueGrey
]

const { initTheme, useTheme } = createTheme<ClockThemeColors>(themes.at(0)!);
export { initTheme, useTheme };