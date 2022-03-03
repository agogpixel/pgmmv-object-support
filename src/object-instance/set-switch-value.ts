import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { resolveId } from './resolve-id';

export function setSwitchValue(objectInstance: AgtkObjectInstance, key: number | string, value: boolean) {
  return objectInstance.switches.get(resolveId(objectInstance, 'switches', key)).setValue(value);
}
