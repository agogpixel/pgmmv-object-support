/**
 * Exports object instance get variable variable value function.
 *
 * @module object-instance/variables/get-variable-value.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { ObjectInstanceAccessorType } from '../object-instance-accessor-type.enum';
import { resolveId } from '../resolve-id.function';

/**
 * Get variable value in object instance.
 *
 * @param objectInstance Object instance.
 * @param key Variable ID or name.
 * @returns Resolved variable value or `undefined`.
 */
export function getVariableValue(objectInstance: AgtkObjectInstance, key: number | string) {
  const id = resolveId(objectInstance, ObjectInstanceAccessorType.Variables, key);

  if (id === -1) {
    return;
  }

  return objectInstance.variables.get(id).getValue();
}
