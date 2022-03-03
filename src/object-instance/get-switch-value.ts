import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { resolveId } from './resolve-id';

export function getSwitchValue(objectInstance: AgtkObjectInstance, key: number | string) {
  return objectInstance.switches.get(resolveId(objectInstance, 'switches', key)).getValue();
}
