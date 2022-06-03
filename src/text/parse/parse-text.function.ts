/**
 * Exports parse text function.
 *
 * @module text/parse/parse-text.function
 */
import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';
import type { AgtkText } from '@agogpixel/pgmmv-ts/api/agtk/text';

import { getFontLetterHeight } from '../../font/get-font-letter-height.function';
import { getFont } from '../../font/get-font.function';

import { parseTextTagColor } from './parse-text-tag-color.function';
import { parseTextTagSize } from './parse-text-tag-size.function';
import type { ParsedTextLineSegment } from './parsed-text-line-segment.interface';
import type { ParsedTextLine } from './parsed-text-line.interface';
import type { ParsedText } from './parsed-text.interface';
import { resolveFont } from './resolve-font.function';
import { resolveText } from './resolve-text.function';
import { TextTagStart } from './text-tag-start.enum';

/**
 * List of available text tag start strings.
 */
const availableTextTagStarts = [TextTagStart.Color, TextTagStart.Size];

/**
 * Parse text into a usable form for further processing.
 *
 * @param keyOrText Text ID, name, or object.
 * @param locale Text locale.
 * @param fallbackFont Fallback when text does not have an associated font.
 * @param defaultColor Default text color.
 * @returns ParsedText or `undefined`.
 */
export function parseText(
  keyOrText: number | string | AgtkText,
  locale: string,
  fallbackFont?: number | string | AgtkFont,
  defaultColor = cc.color(255, 255, 255, 255)
) {
  const textData = resolveText(keyOrText);

  if (!textData) {
    return;
  }

  const rawText = textData.getText(locale);

  if (!rawText) {
    return;
  }

  let fontData: AgtkFont | undefined;

  if (textData.fontId >= 0) {
    fontData = getFont(textData.fontId);
  } else {
    if (fallbackFont === undefined) {
      return;
    }

    fontData = resolveFont(fallbackFont);
  }

  if (!fontData) {
    return;
  }

  const letterHeight = getFontLetterHeight(fontData);

  if (!letterHeight) {
    return;
  }

  let currentColor = defaultColor;
  let currentSize = letterHeight;

  const parsedText: ParsedText = {
    locale,
    normalizedText: '',
    parsedTextLines: [],
    sourceTextData: textData,
    sourceFontData: fontData,
    defaultColor,
    defaultLetterHeight: letterHeight
  };

  const rawTextLines = rawText.split('\n');

  for (let i = 0; i < rawTextLines.length; ++i) {
    const parsedTextLine: ParsedTextLine = { normalizedText: '', parsedTextLineSegments: [] };
    let parsedTextLineSegment: ParsedTextLineSegment = { normalizedText: '', color: currentColor, size: currentSize };

    const rawTextLine = rawTextLines[i];

    for (let j = 0; j < rawTextLine.length; ++j) {
      if (rawTextLine.substring(j, j + 2) == '\\\\') {
        ++j;
        parsedTextLineSegment.normalizedText += '\\';
        continue;
      }

      const textTagStartCandidate = rawTextLine.substring(j, j + 3);

      if (!availableTextTagStarts.includes(textTagStartCandidate as TextTagStart)) {
        parsedTextLineSegment.normalizedText += rawTextLine[j];
        continue;
      } else if (parsedTextLineSegment.normalizedText.length) {
        parsedTextLine.normalizedText += parsedTextLineSegment.normalizedText;
        parsedTextLine.parsedTextLineSegments.push(parsedTextLineSegment);
        parsedTextLineSegment = { normalizedText: '', color: currentColor, size: currentSize };
      }

      const index = rawTextLine.indexOf(']', j + 3);

      switch (textTagStartCandidate) {
        case TextTagStart.Color:
          if (index >= 0) {
            parsedTextLineSegment.color = currentColor = parseTextTagColor(
              rawTextLine.substring(j + 3, index),
              defaultColor
            );
          }
          break;
        case TextTagStart.Size:
          if (index >= 0) {
            parsedTextLineSegment.size = currentSize = parseTextTagSize(
              rawTextLine.substring(j + 3, index),
              currentSize,
              letterHeight
            );
          }

          break;
      }
    }

    parsedTextLine.normalizedText += parsedTextLineSegment.normalizedText;
    parsedTextLine.parsedTextLineSegments.push(parsedTextLineSegment);

    parsedText.normalizedText += parsedTextLine.normalizedText;

    if (i !== rawTextLines.length - 1) {
      parsedText.normalizedText += '\n';
    }

    parsedText.parsedTextLines.push(parsedTextLine);
  }

  return parsedText;
}
