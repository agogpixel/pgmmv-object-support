/**
 * Exports get font letter height function.
 *
 * @module font/get-font-letter-height.function
 */
import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';

import { getImageTexture } from '../image/get-image-texture.function';

import { getFont } from './get-font.function';

/**
 * Get letter height for font with specified ID, name, or object.
 *
 * @param keyOrImage Font ID, name, or object.
 * @returns Letter height or `undefined`.
 */
export function getFontLetterHeight(keyOrFont: number | string | AgtkFont) {
  let font: AgtkFont | undefined;

  if (typeof keyOrFont === 'number' || typeof keyOrFont === 'string') {
    font = getFont(keyOrFont);
  } else {
    font = keyOrFont;
  }

  if (!font) {
    return;
  }

  if (!font.imageFontFlag) {
    return font.fontSize;
  }

  if (font.imageId < 0) {
    return;
  }

  const texture = getImageTexture(font.imageId);

  if (!texture) {
    return;
  }

  texture.setAliasTexParameters();
  const numLetterLayoutLines = (font.letterLayout.match(/\n/g) || []).length;

  return Math.floor(texture.height / numLetterLayoutLines);
}
