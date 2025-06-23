import {useState, useEffect} from 'react';
import {BinaryTimeMode, asBinaryTime} from './binaryTime';
import {useTime} from './useTime';
import isEqual from 'lodash/isEqual';

export function useBinaryTime(
  mode: BinaryTimeMode = BinaryTimeMode.SINGLE_DIGITS,
): ReturnType<typeof asBinaryTime> {
  const time = useTime();
  const [digits, setDigits] = useState(() => asBinaryTime(time, mode));
  useEffect(() => {
    const newDigits = asBinaryTime(time, mode);
    setDigits(prev =>
      // Where possible, preserve object references on a per-digit basis.
      prev.map((digit, idx) => {
        if (digit.value === newDigits[idx].value) {
          return digit;
        } else {
          // Where possible, preserve object references on a per-bit basis.
          return {
            value: newDigits[idx].value,
            bits: digit.bits.map((bit, bitIdx) => {
              const newBit = newDigits[idx].bits[bitIdx];
              return isEqual(bit, newBit) ? bit : newBit;
            }),
          };
        }
      }),
    );
  }, [time, mode]);
  return digits;
}
