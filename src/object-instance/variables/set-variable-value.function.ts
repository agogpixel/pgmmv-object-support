/**
 * Exports object instance set variable variable value function.
 *
 * @module object-instance/switches/set-variable-value.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { ObjectInstanceAccessorType } from '../object-instance-accessor-type.enum';
import { resolveId } from '../resolve-id.function';

/**
 * Set variable value in object instance.
 *
 * @param objectInstance Object instance.
 * @param key Variable ID or name.
 * @param value Value to be set.
 */
export function setVariableValue(objectInstance: AgtkObjectInstance, key: number | string, value: number) {
  const id = resolveId(objectInstance, ObjectInstanceAccessorType.Variables, key);

  if (id === -1) {
    return;
  }

  objectInstance.variables.get(id).setValue(value);
}
