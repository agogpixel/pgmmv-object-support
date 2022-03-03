import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { resolveId } from './resolve-id';

export function setVariableValue(objectInstance: AgtkObjectInstance, key: number | string, value: number) {
  return objectInstance.variables.get(resolveId(objectInstance, 'variables', key)).setValue(value);
}
