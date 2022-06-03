/**
 * Exports Cocos2d text node class factory.
 *
 * @module
 */
import type { AgtkFont } from '@agogpixel/pgmmv-ts/api/agtk/font';
import type { AgtkText } from '@agogpixel/pgmmv-ts/api/agtk/text';
import type { CCNode } from '@agogpixel/pgmmv-ts/api/cc/node';

import { getImageTexture } from '../../image/get-image-texture.function';

import { parseText } from '../../text/parse/parse-text.function';
import type { ParsedTextLine } from '../../text/parse/parsed-text-line.interface';

import { TextNodeAlignment } from './text-node-alignment.enum';
import type { TextNodeClass } from './text-node-class.type';
import type { TextNode } from './text-node.interface';

/**
 * Text node class singleton.
 */
let textNodeClass: TextNodeClass;

/**
 * Create text node class.
 *
 * @returns Text node class constructor.
 */
export function createTextNodeClass() {
  if (textNodeClass) {
    return textNodeClass;
  }

  textNodeClass = cc.Node.extend<TextNodeClass>({
    ctor: function (
      this: TextNode,
      keyOrText: number | string | AgtkText,
      locale: string,
      fallbackFont?: number | string | AgtkFont,
      defaultColor = cc.color(255, 255, 255, 255),
      alignment = TextNodeAlignment.Left
    ) {
      this._super();

      const parsedText = parseText(keyOrText, locale, fallbackFont, defaultColor);

      if (!parsedText) {
        return false;
      }

      this.parsedText = parsedText;

      if (parsedText.sourceFontData.imageFontFlag) {
        return initWithBitmapFont.call(this, alignment);
      }

      return initWithTrueTypeFont.call(this, alignment);
    }
  });

  return textNodeClass;
}

/**
 * Initialize with bitmap font.
 *
 * @param alignment Horizontal text alignment.
 * @returns True if successful, false otherwise.
 * @private
 */
function initWithBitmapFont(this: TextNode, alignment: TextNodeAlignment) {
  const parsedText = this.parsedText;
  const letterHeight = parsedText.defaultLetterHeight;
  const sourceFontData = parsedText.sourceFontData;
  const sourceTextData = parsedText.sourceTextData;

  const texture = getImageTexture(sourceFontData.imageId);

  if (!texture) {
    return false;
  }

  const letterLayout = sourceFontData.letterLayout;
  const letterLayoutLines = letterLayout.split('\n');
  const letterLayoutLookup: Record<string, { column: number; row: number }> = {};
  let maxletterLayoutLineLength = 0;

  for (let i = 0; i < letterLayoutLines.length; ++i) {
    const letterLayoutLine = letterLayoutLines[i];
    maxletterLayoutLineLength = Math.max(maxletterLayoutLineLength, letterLayoutLine.length);

    for (let j = 0; j < letterLayoutLine.length; ++j) {
      letterLayoutLookup[letterLayoutLine[j]] = { column: j, row: i };
    }
  }

  const letterWidth = Math.floor(texture.width / (maxletterLayoutLineLength || 1));
  const fixedWidth = sourceFontData.fixedWidth;
  const hankakuWidth = sourceFontData.hankakuWidth;
  const zenkakuWidth = sourceFontData.zenkakuWidth;

  const letterSpacing = sourceTextData.letterSpacing;

  try {
    this.renderableTextLines = processParsedText.call(this, alignment, function (parsedTextLine) {
      const renderableTextLine = new cc.SpriteBatchNode(texture);
      renderableTextLine.setAnchorPoint(0, 0);

      const parsedTextLineSegments = parsedTextLine.parsedTextLineSegments;
      let renderableTextLineSegmentX = 0;
      let renderableTextLineSegmentSize = 0;

      for (let i = 0; i < parsedTextLineSegments.length; ++i) {
        const parsedTextLineSegment = parsedTextLineSegments[i];
        const parsedTextLineSegmentNormalizedText = parsedTextLineSegment.normalizedText;
        const parsedTextLineSegmentSize = parsedTextLineSegment.size;

        for (let j = 0; j < parsedTextLineSegmentNormalizedText.length; ++j) {
          const parsedTextLineLetter = parsedTextLineSegmentNormalizedText[j];
          const isHankaku =
            !parsedTextLineLetter.match(/[^\x01-\x7E]/) || !parsedTextLineLetter.match(/[^\uFF65-\uFF9F]/);

          const textureCell = letterLayoutLookup[parsedTextLineLetter];

          if (!textureCell) {
            continue;
          }

          const renderableTextLineLetter = new cc.Sprite(
            texture,
            cc.rect(textureCell.column * letterWidth, textureCell.row * letterHeight, letterWidth, letterHeight)
          );

          renderableTextLineLetter.setAnchorPoint(0, 0);
          renderableTextLineLetter.x = renderableTextLineSegmentX;
          renderableTextLineLetter.y = 2 * letterHeight - parsedTextLineSegmentSize;
          renderableTextLineLetter.width = (letterWidth * parsedTextLineSegmentSize) / letterHeight;
          renderableTextLineLetter.height = parsedTextLineSegmentSize;
          renderableTextLineLetter.color = parsedTextLineSegment.color;

          renderableTextLineSegmentX +=
            ((fixedWidth ? letterWidth : isHankaku ? hankakuWidth : zenkakuWidth) * parsedTextLineSegmentSize) /
              letterHeight +
            letterSpacing;

          if (parsedTextLineSegmentSize > renderableTextLineSegmentSize) {
            renderableTextLineSegmentSize = parsedTextLineSegmentSize;
          }

          renderableTextLine.addChild(renderableTextLineLetter);
        }
      }

      renderableTextLine.setContentSize(renderableTextLineSegmentX, renderableTextLineSegmentSize);

      return renderableTextLine;
    });
  } catch (e) {
    return false;
  }

  return true;
}

/**
 * Initialize with true type font.
 *
 * @param alignment Horizontal text alignment.
 * @returns True if successful, false otherwise.
 * @private
 */
function initWithTrueTypeFont(this: TextNode, alignment: TextNodeAlignment) {
  const parsedText = this.parsedText;
  const letterHeight = parsedText.defaultLetterHeight;
  const sourceFontData = parsedText.sourceFontData;
  const sourceTextData = parsedText.sourceTextData;

  const aliasThreshold = sourceFontData.antialiasDisabled ? sourceFontData.aliasThreshold : -1;
  const filename = `fonts/${sourceFontData.fontName}.ttf`;
  const fontSize = sourceFontData.fontSize;

  const letterSpacing = sourceTextData.letterSpacing;

  try {
    this.renderableTextLines = processParsedText.call(this, alignment, function (parsedTextLine) {
      const renderableTextLine = new cc.Node();
      renderableTextLine.setAnchorPoint(0, 0);

      const parsedTextLineSegments = parsedTextLine.parsedTextLineSegments;
      let renderableTextLineSegmentX = 0;
      let renderableTextLineSegmentSize = 0;

      for (let i = 0; i < parsedTextLineSegments.length; ++i) {
        const parsedTextLineSegment = parsedTextLineSegments[i];
        const parsedTextLineSegmentSize = parsedTextLineSegment.size;

        const renderableTextLineSegment = new cc.LabelTTF(
          parsedTextLineSegment.normalizedText,
          filename,
          (fontSize * parsedTextLineSegmentSize) / letterHeight,
          undefined,
          undefined,
          undefined,
          aliasThreshold
        );

        renderableTextLineSegment.color = parsedTextLineSegment.color;

        renderableTextLineSegment.setAnchorPoint(0, 0);
        renderableTextLineSegment.x = renderableTextLineSegmentX;
        renderableTextLineSegment.y =
          letterHeight - (parsedTextLineSegmentSize - letterHeight) - parsedTextLineSegmentSize / 8;

        renderableTextLineSegmentX += renderableTextLineSegment.width + letterSpacing;

        if (parsedTextLineSegmentSize > renderableTextLineSegmentSize) {
          renderableTextLineSegmentSize = parsedTextLineSegmentSize;
        }

        renderableTextLine.addChild(renderableTextLineSegment);
      }

      renderableTextLine.setContentSize(renderableTextLineSegmentX, renderableTextLineSegmentSize);

      return renderableTextLine;
    });
  } catch (e) {
    return false;
  }

  return true;
}

/**
 * Process parsed text.
 *
 * @param alignment Horizontal text alignment.
 * @returns Renderable text lines.
 * @private
 */
function processParsedText(
  this: TextNode,
  alignment: TextNodeAlignment,
  callback: (parsedTextLine: ParsedTextLine) => CCNode
) {
  const parsedTextLines = this.parsedText.parsedTextLines;
  const renderableTextLines: CCNode[] = [];

  let renderableTextLinesHeight = 0;
  let maxRenderableTextLineWidth = 0;

  for (let i = 0; i < parsedTextLines.length; ++i) {
    const renderableTextLine = callback(parsedTextLines[i]);

    if (renderableTextLine.width > maxRenderableTextLineWidth) {
      maxRenderableTextLineWidth = renderableTextLine.width;
    }

    renderableTextLinesHeight += renderableTextLine.height;
    renderableTextLines.push(renderableTextLine);
  }

  let renderableTextLinesOffsetY = renderableTextLinesHeight / 2;

  for (let i = 0; i < renderableTextLines.length; ++i) {
    const renderableTextLine = renderableTextLines[i];

    switch (alignment) {
      case TextNodeAlignment.Center:
        renderableTextLine.x =
          -(maxRenderableTextLineWidth / 2) - -((maxRenderableTextLineWidth - renderableTextLine.width) / 2);
        break;
      case TextNodeAlignment.Right:
        renderableTextLine.x =
          -(maxRenderableTextLineWidth / 2) - -(maxRenderableTextLineWidth - renderableTextLine.width);
        break;
      case TextNodeAlignment.Left:
      default:
        renderableTextLine.x = -(maxRenderableTextLineWidth / 2);
        break;
    }

    renderableTextLinesOffsetY -= renderableTextLine.height;
    renderableTextLine.y = renderableTextLinesOffsetY;

    this.addChild(renderableTextLine);
  }

  this.setContentSize(maxRenderableTextLineWidth, renderableTextLinesHeight);

  return renderableTextLines;
}
