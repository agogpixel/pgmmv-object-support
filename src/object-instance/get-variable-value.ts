import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { resolveId } from './resolve-id';

export function getVariableValue(objectInstance: AgtkObjectInstance, key: number | string) {
  return objectInstance.variables.get(resolveId(objectInstance, 'variables', key)).getValue();
}
