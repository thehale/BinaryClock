// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { createTheme } from "react-native-expressive";
import ClockHackerGreen from "./ClockHackerGreen";
import type { ClockThemeColors } from "./types";

const { initTheme, useTheme } = createTheme<ClockThemeColors>(ClockHackerGreen)
export { initTheme, useTheme };