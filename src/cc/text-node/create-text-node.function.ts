/**
 * Exports Cocos2d text node factory function.
 *
 * @module
 */
import type { CCNode } from '@agogpixel/pgmmv-ts/api/cc/node';

import { getImageTexture } from '../../image/get-image-texture.function';
import { parseText } from '../../text/parse/parse-text.function';
import type { ParsedTextLine } from '../../text/parse/parsed-text-line.interface';

import { TextNodeAlignment } from './text-node-alignment.enum';
import type { TextNodeConfig } from './text-node-config.interface';
import type { TextNodeProtectedApi } from './text-node-protected-api.interface';
import type { TextNode } from './text-node.interface';

/**
 * Create a text node instance.
 *
 * @param config Text node configuration.
 * @param internal Optional internal/protected API. Facilitates inheritance.
 * @returns Text node instance.
 */
export function createTextNode(config: TextNodeConfig, internal?: TextNodeProtectedApi) {
  // Public API container.
  const self = new cc.Node() as TextNode;

  // Protected API container.
  const internalApi = internal || ({} as TextNodeProtectedApi);

  /**
   * Process parsed text.
   *
   * @param callback Creates a renderable text line.
   * @returns Renderable text lines.
   * @private
   */
  function processParsedText(callback: (parsedTextLine: ParsedTextLine) => CCNode) {
    const parsedTextLines = internalApi.parsedText?.parsedTextLines;

    if (!parsedTextLines) {
      return;
    }

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

      switch (internalApi.alignment) {
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

      self.addChild(renderableTextLine);
    }

    self.setContentSize(maxRenderableTextLineWidth, renderableTextLinesHeight);

    return renderableTextLines;
  }

  /**
   * Initialize with bitmap font.
   *
   * @private
   */
  function initWithBitmapFont() {
    const parsedText = internalApi.parsedText;

    if (!parsedText) {
      return;
    }

    const letterHeight = parsedText.defaultLetterHeight;
    const sourceFontData = parsedText.sourceFontData;
    const sourceTextData = parsedText.sourceTextData;

    const texture = getImageTexture(sourceFontData.imageId);

    if (!texture) {
      return;
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

    internalApi.renderableTextLines = processParsedText(function (parsedTextLine) {
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
  }

  /**
   * Initialize with true type font.
   *
   * @private
   */
  function initWithTrueTypeFont() {
    const parsedText = internalApi.parsedText;

    if (!parsedText) {
      return;
    }

    const letterHeight = parsedText.defaultLetterHeight;
    const sourceFontData = parsedText.sourceFontData;
    const sourceTextData = parsedText.sourceTextData;

    const aliasThreshold = sourceFontData.antialiasDisabled ? sourceFontData.aliasThreshold : -1;
    const filename = `fonts/${sourceFontData.fontName}.ttf`;
    const fontSize = sourceFontData.fontSize;

    const letterSpacing = sourceTextData.letterSpacing;

    internalApi.renderableTextLines = processParsedText(function (parsedTextLine) {
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
  }

  self.getAlignment = function () {
    return internalApi.alignment;
  };

  self.getDefaultColor = function () {
    const color = internalApi.parsedText?.defaultColor;

    if (color) {
      return cc.color(color);
    }
  };

  self.getDefaultLetterHeight = function () {
    return internalApi.parsedText?.defaultLetterHeight;
  };

  self.getLocale = function () {
    return internalApi.parsedText?.locale;
  };

  self.getNormalizedText = function () {
    return internalApi.parsedText?.normalizedText;
  };

  self.getSourceFontData = function () {
    return internalApi.parsedText?.sourceFontData;
  };

  self.getSourceTextData = function () {
    return internalApi.parsedText?.sourceTextData;
  };

  self.setConfig = function (config) {
    internalApi.alignment = config.alignment !== undefined ? config.alignment : TextNodeAlignment.Left;
    internalApi.parsedText = parseText(config.keyOrText, config.locale, config.fallbackFont, config.defaultColor);

    self.removeAllChildren();

    if (!internalApi.parsedText) {
      return self;
    }

    if (internalApi.parsedText.sourceFontData.imageFontFlag) {
      initWithBitmapFont();
    } else {
      initWithTrueTypeFont();
    }

    return self;
  };

  // Text node is ready!
  return self.setConfig(config);
}
