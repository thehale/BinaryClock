// Copyright (c) 2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import './__fixtures__/toRepresentBinary';

import {
  BinaryTimeMode,
  InvalidBinaryConversionException,
  asBinaryDigit,
  asBinaryTime,
} from '../binaryTime';
import {describe, expect, test} from '@jest/globals';

describe('Time to Binary Time (Single Digits)', () => {
  test('midnight is all zeros', () => {
    const time = asBinaryTime({hours: 0, minutes: 0, seconds: 0});
    expect(time.digits).toRepresentBinary([' 00000', '000000', '000000']);
  });
  test('just before midnight converts correctly', () => {
    const time = asBinaryTime({hours: 23, minutes: 59, seconds: 59});
    expect(time.digits).toRepresentBinary([' 10111', '111011', '111011']);
  });
});

describe('Time to Binary Time (Double Digits)', () => {
  test('midnight is all zeros', () => {
    const time = asBinaryTime(
      {hours: 0, minutes: 0, seconds: 0},
      BinaryTimeMode.DOUBLE_DIGITS,
    );
    expect(time.digits).toRepresentBinary([
      '  00',
      '0000',
      ' 000',
      '0000',
      ' 000',
      '0000',
    ]);
  });
  test('just before midnight converts correctly', () => {
    const time = asBinaryTime(
      {hours: 23, minutes: 59, seconds: 59},
      BinaryTimeMode.DOUBLE_DIGITS,
    );
    expect(time.digits).toRepresentBinary([
      '  10',
      '0011',
      ' 101',
      '1001',
      ' 101',
      '1001',
    ]);
  });
});

describe('Number to Binary Digit', () => {
  test(`negatives are not supported`, () => {
    expect(() => asBinaryDigit(-1)).toThrowError(
      InvalidBinaryConversionException,
    );
  });
  test(`digits are aware of their value`, () => {
    const digit = asBinaryDigit(32);
    expect(digit.value).toEqual(32);
  });
  test(`numbers return the minimum bits required`, () => {
    expect(asBinaryDigit(0)).toRepresentBinary('0');
    expect(asBinaryDigit(1)).toRepresentBinary('1');
    expect(asBinaryDigit(2)).toRepresentBinary('10');
    expect(asBinaryDigit(4)).toRepresentBinary('100');
    expect(asBinaryDigit(8)).toRepresentBinary('1000');
    expect(asBinaryDigit(16)).toRepresentBinary('10000');
    expect(asBinaryDigit(32)).toRepresentBinary('100000');
    expect(asBinaryDigit(64)).toRepresentBinary('1000000');
  });
  test(`each bit is aware of its value within the larger digit`, () => {
    const bits = asBinaryDigit(59).bits;
    expect(bits[0].value).toEqual(32);
    expect(bits[1].value).toEqual(16);
    expect(bits[2].value).toEqual(8);
    expect(bits[3].value).toEqual(4);
    expect(bits[4].value).toEqual(2);
    expect(bits[5].value).toEqual(1);
  });
  test(`providing a large max value pre-pads the digit with zeros`, () => {
    const digit = asBinaryDigit(15, {maxValue: 59});
    expect(digit).toRepresentBinary('001111');
  });
  test(`max value must equal or exceed digit value`, () => {
    const digit = asBinaryDigit(15, {maxValue: 15});
    expect(digit).toRepresentBinary('1111');
    expect(() => asBinaryDigit(15, {maxValue: 14})).toThrowError(
      InvalidBinaryConversionException,
    );
  });
  test(`max visible value hides bits larger than the threshold`, () => {
    const digit = asBinaryDigit(15, {maxValue: 59, maxVisibleValue: 24});
    expect(digit).toRepresentBinary(' 01111');
  });
  test(`max visible value must equal or exceed digit value`, () => {
    const digit = asBinaryDigit(15, {maxVisibleValue: 15});
    expect(digit).toRepresentBinary('1111');
    expect(() => asBinaryDigit(15, {maxVisibleValue: 14})).toThrowError(
      InvalidBinaryConversionException,
    );
  });
});
