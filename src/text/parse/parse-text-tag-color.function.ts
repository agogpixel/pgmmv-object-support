/**
 * Exports parse text tag color function.
 *
 * @module text/parse/parse-text-tag-color.function
 */
import type { CCColor } from '@agogpixel/pgmmv-ts/api/cc/color';

import { getInt } from './get-int.function';

/**
 * Parse text tag color.
 *
 * @param subject Text tag content.
 * @param defaultColor Fallback color if subject is invalid.
 * @returns CCColor instance.
 */
export function parseTextTagColor(subject: string, defaultColor: CCColor) {
  if (subject.length == 0) {
    return defaultColor;
  } else if (subject[0] === '#') {
    if (subject.length !== 4 && subject.length !== 7) {
      return defaultColor;
    }

    const v = parseInt(subject.substring(1), 16);

    if (subject.length === 4) {
      return cc.color(((v >> 8) & 0x0f) * 0x11, ((v >> 4) & 0x0f) * 0x11, ((v >> 0) & 0x0f) * 0x11, 255);
    }

    return cc.color((v >> 16) & 0xff, (v >> 8) & 0xff, (v >> 0) & 0xff, 255);
  }

  const list = subject.split(',');

  if (list.length >= 3) {
    return cc.color(
      Math.max(0, Math.min(255, getInt(list[0], 255))),
      Math.max(0, Math.min(255, getInt(list[1], 255))),
      Math.max(0, Math.min(255, getInt(list[2], 255))),
      255
    );
  }

  return defaultColor;
}
