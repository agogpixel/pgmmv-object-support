/**
 * Exports get image texture function.
 *
 * @module image/get-image-texture.function
 */
import type { AgtkImage } from '@agogpixel/pgmmv-ts/api/agtk/image';

import { getImage } from './get-image.function';

/**
 * Get texture for image with specified ID, name, or object.
 *
 * @param keyOrImage Image ID, name, or object.
 * @returns Texture or `undefined`.
 */
export function getImageTexture(keyOrImage: number | string | AgtkImage) {
  let image: AgtkImage | undefined;

  if (typeof keyOrImage === 'number' || typeof keyOrImage === 'string') {
    image = getImage(keyOrImage);
  } else {
    image = keyOrImage;
  }

  if (!image) {
    return;
  }

  return cc.textureCache.addImage(image.filename);
}
