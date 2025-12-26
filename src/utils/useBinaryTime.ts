import { useState, useEffect } from 'react';
import { BinaryBit, BinaryTime, BinaryTimeMode, asBinaryTime } from './binaryTime';
import { useTime } from './useTime';
import isEqual from 'lodash/isEqual';

export function useBinaryTime(mode: BinaryTimeMode = BinaryTimeMode.SINGLE_DIGITS): BinaryTime {
  const time = useTime();
  const [digits, setDigits] = useState(() => asBinaryTime(time, mode));
  useEffect(() => {
    const newDigits = asBinaryTime(time, mode);
    setDigits(prev => carryForwardUnchangedDigits(prev, newDigits));
  }, [time, mode]);
  return digits;
}

/** Where possible, preserve object references on a per-digit basis. */
function carryForwardUnchangedDigits(prevTime: BinaryTime, newTime: BinaryTime): BinaryTime {
  return prevTime.map((digit, idx) => {
    if (digit.value === newTime[idx].value) {
      return digit;
    } else {
      return {
        value: newTime[idx].value,
        bits: carryForwardUnchangedBits(digit.bits, newTime[idx].bits),
      }
    }
  });
}

/** Where possible, preserve object references on a per-bit basis. */
function carryForwardUnchangedBits(prevBits: BinaryBit[], newBits: BinaryBit[]): BinaryBit[] {
  return prevBits.map((bit, idx) => {
    const newBit = newBits[idx];
    return isEqual(bit, newBit) ? bit : newBit;
  });
}
