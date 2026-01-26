// Copyright (c) 2025 Joseph Hale
// 
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { useSettings } from "../settings/useSettings";
import Orientation from "../utils/orientation";
import BinaryClock from "./BinaryClock";
import { Measured, useMeasurements } from "react-native-expressive";
import { SquaresClock } from "./SquaresClock";

interface AutoOrientingClockProps {
  lastAspectUpdate: number;
}

export default function AutoOrientingClock(props: AutoOrientingClockProps) {
  return (
    <Measured>
      <Content {...props} />
    </Measured>
  )
}

function Content(props: AutoOrientingClockProps) {
  const m = useMeasurements();
  const orientation = m.height > m.width ? Orientation.Portrait : Orientation.Landscape;
  const showClock = m.timestamp > props.lastAspectUpdate;

  const [settings] = useSettings();
  return (
    showClock && <BinaryClock
      orientation={orientation}
      brightness={settings.brightness}
      roundness={settings.roundness}
      fill={settings.fill}
      showHints={settings.showHints}
    />
  )
}
