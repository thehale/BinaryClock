// Copyright (c) 2026 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import Orientation from "../utils/orientation";
import { DEFAULT_SETTINGS } from '../settings/definitions';
import { useTheme } from '../theme/useTheme';
import { useBinaryTime } from '../utils/useBinaryTime';
import { Squares } from "react-native-expressive";
import { BinaryTimeMode } from "../utils/binaryTime";
import BinaryDot from "./BinaryDot";

interface BinaryClockProps {
  orientation?: Orientation;
  brightness?: number;
  roundness?: number;
	fill?: number;
  showHints?: boolean;
}

const DEFAULTS = {
  orientation: Orientation.Landscape,
  brightness: DEFAULT_SETTINGS.brightness,
  roundness: DEFAULT_SETTINGS.roundness,
	fill: DEFAULT_SETTINGS.fill,
  showHints: DEFAULT_SETTINGS.showHints,
};

export function SquaresClock(_props: BinaryClockProps) {
  const props = { ...DEFAULTS, ..._props };
  if (props.orientation === Orientation.Landscape) {
    return <LandscapeClock {...props} />;
  } else if (props.orientation === Orientation.Portrait) {
    return <PortraitClock {...props} />;
  } else {
    throw new Error(`Invalid orientation: ${props.orientation}`);
  }
}

function LandscapeClock(props: BinaryClockProps) {
	const digits = useBinaryTime(BinaryTimeMode.DOUBLE_DIGITS);
	return (
		<Squares rows={4} columns={6} flow={{origin: "top-left", direction: "column" }}>
			{
				digits.flatMap(digit => digit.bits).map((bit, index) => (
					<BinaryDot
						key={`landscape-bit-${index}`}
						bit={bit}
						brightness={props.brightness}
						roundness={props.roundness}
						fill={props.fill}
						showHints={props.showHints}
					/>
				))
			}
		</Squares>
	)
}

function PortraitClock(props: BinaryClockProps) {
	const digits = useBinaryTime(BinaryTimeMode.SINGLE_DIGITS);
	return (
		<Squares rows={6} columns={3} flow={{origin: "top-left", direction: "column" }}>
			{
				digits.flatMap(digit => digit.bits).map((bit, index) => (
					<BinaryDot
						key={`portrait-bit-${index}`}
						bit={bit}
						brightness={props.brightness}
						roundness={props.roundness}
						fill={props.fill}
						showHints={props.showHints}
					/>
				))
			}
		</Squares>
	)
}

