// Copyright (c) 2024 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import {type BinaryBit, type BinaryDigit} from '../../binaryTime';

declare module 'expect' {
  interface AssymmetricMatchers {
    toRepresentBinary(templates: string | string[]): void;
  }
  interface Matchers<R> {
    toRepresentBinary(templates: string | string[]): R;
  }
}
expect.extend({toRepresentBinary});

function toRepresentBinary(
  actual: BinaryDigit | BinaryDigit[],
  templates: string | string[],
) {
  const _digits = Array.isArray(actual) ? actual : [actual];
  const _templates = Array.isArray(templates) ? templates : [templates];
  if (_digits.length !== _templates.length) {
    return {
      message: () =>
        `expected: ${_templates.length} digits for '${JSON.stringify(
          _templates,
        )}', was: ${_digits.length} digits in ${JSON.stringify(_digits)}`,
      pass: false,
    };
  }
  for (let idx = 0; idx < _templates.length; idx++) {
    const result = _toRepresentBinary(_digits[idx].bits, _templates[idx]);
    if (result) {
      return result;
    }
  }
  return {
    message: () => `expected '${_digits}' to represent '${_templates}'`,
    pass: true,
  };
}
function _toRepresentBinary(actual: BinaryBit[], template: string) {
  const _bits = actual;
  if (_bits.length !== template.length) {
    return {
      message: () =>
        `expected: ${template.length} bits for '${template}', was: ${
          _bits.length
        } bits in ${JSON.stringify(_bits)}`,
      pass: false,
    };
  } else {
    const msg = (idx: number) =>
      `for template '${template}', bit ${idx + 1}/${_bits.length} in ${_bits}`;
    for (let idx = 0; idx < template.length; idx++) {
      switch (template[idx]) {
        case ' ':
          if (visibility(_bits[idx]) !== 'invisible') {
            return {message: () => msg(idx), pass: false};
          }
          break;
        case '0':
          if (activeStatus(_bits[idx]) !== 'inactive') {
            return {message: () => msg(idx), pass: false};
          }
          if (visibility(_bits[idx]) !== 'visible') {
            return {message: () => msg(idx), pass: false};
          }
          break;
        case '1':
          if (activeStatus(_bits[idx]) !== 'active') {
            return {message: () => msg(idx), pass: false};
          }
          if (visibility(_bits[idx]) !== 'visible') {
            return {message: () => msg(idx), pass: false};
          }
          break;
        default:
          throw new Error(
            `A binary template cannot contain '${template[idx]}'`,
          );
      }
    }
  }
}

function activeStatus(bit: BinaryBit): string {
  return bit.active ? 'active' : 'inactive';
}

function visibility(bit: BinaryBit): string {
  return bit.visible ? 'visible' : 'invisible';
}
