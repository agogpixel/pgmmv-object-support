import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { resolveId } from './resolve-id';

export function toggleSwitchValue(objectInstance: AgtkObjectInstance, key: number | string) {
  const id = resolveId(objectInstance, 'switches', key);
  const container = objectInstance.switches.get(id);
  const newValue = !container.getValue();
  container.setValue(newValue);
  return newValue;
}
