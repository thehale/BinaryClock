// Copyright (c) 2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

const {ceil, log2, pow, max, floor} = Math;

export class InvalidBinaryConversionException extends Error {}

export interface BinaryBit {
  active: boolean;
  value: number;
  visible: boolean;
}

export interface BinaryDigit {
  /**
   * The bits comprising the digit in descending order of value.
   *
   * "12" (base 10) -> "1010" (base 2) -> { 1, 0, 1, 0 } (collection order)
   */
  bits: BinaryBit[];
  value: number;
}

interface BinaryTime {
  digits: BinaryDigit[];
}

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export enum BinaryTimeMode {
  /** Each time component is represented by a single digit */
  SINGLE_DIGITS = 'SINGLE_DIGITS',

  /** Each time component is represented by a two digits (tens and ones places) */
  DOUBLE_DIGITS = 'DOUBLE_DIGITS',
}

export function asBinaryTime(
  time: Time,
  mode: BinaryTimeMode = BinaryTimeMode.SINGLE_DIGITS,
): BinaryTime {
  switch (mode) {
    case BinaryTimeMode.SINGLE_DIGITS:
      return {
        digits: [
          asBinaryDigit(time.hours, {maxVisibleValue: 23, maxValue: 59}),
          asBinaryDigit(time.minutes, {maxVisibleValue: 59, maxValue: 59}),
          asBinaryDigit(time.seconds, {maxVisibleValue: 59, maxValue: 59}),
        ],
      };

    case BinaryTimeMode.DOUBLE_DIGITS:
      const firstDigit = (n: number) => Math.floor(n / 10);
      const secondDigit = (n: number) => n % 10;
      return {
        digits: [
          asBinaryDigit(firstDigit(time.hours), {
            maxVisibleValue: 2,
            maxValue: 9,
          }),
          asBinaryDigit(secondDigit(time.hours), {
            maxVisibleValue: 9,
            maxValue: 9,
          }),
          asBinaryDigit(firstDigit(time.minutes), {
            maxVisibleValue: 5,
            maxValue: 9,
          }),
          asBinaryDigit(secondDigit(time.minutes), {
            maxVisibleValue: 9,
            maxValue: 9,
          }),
          asBinaryDigit(firstDigit(time.seconds), {
            maxVisibleValue: 5,
            maxValue: 9,
          }),
          asBinaryDigit(secondDigit(time.seconds), {
            maxVisibleValue: 9,
            maxValue: 9,
          }),
        ],
      };
  }
}

export function asBinaryDigit(
  number: number,
  options?: {
    maxValue?: number;
    maxVisibleValue?: number;
  },
): BinaryDigit {
  const _maxValue = options?.maxValue ?? number;
  const _maxVisibleValue =
    options?.maxVisibleValue ?? ceilingPowerOf2(_maxValue);
  if (number < 0) {
    throw new InvalidBinaryConversionException(`${number} must be positive`);
  } else if (_maxValue < number) {
    throw new InvalidBinaryConversionException(
      `A max value of ${_maxValue} would truncate ${number}`,
    );
  } else if (_maxVisibleValue < number) {
    throw new InvalidBinaryConversionException(
      `A max visible value of ${_maxVisibleValue} would truncate ${number}`,
    );
  } else {
    const bitCount = max(1, floor(log2(_maxValue)) + 1);
    const bitValues = Array.from(Array(bitCount), (_, i) => 2 ** i).reverse();
    return {
      bits: bitValues.map(i => ({
        /* eslint no-bitwise: ["error", { "allow": ["&"] }] */
        active: (number & i) > 0,
        value: i,
        visible:
          _maxVisibleValue >= i || (number === 0 && _maxVisibleValue === 0),
      })),
      value: number,
    };
  }
}

function ceilingPowerOf2(number: number): number {
  const exponent = ceil(log2(number));
  return pow(2.0, exponent);
}
