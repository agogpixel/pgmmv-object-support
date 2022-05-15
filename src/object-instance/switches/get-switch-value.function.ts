/**
 * Exports object instance get switch variable value function.
 *
 * @module object-instance/switches/get-switch-value.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { ObjectInstanceAccessorType } from '../object-instance-accessor-type.enum';
import { resolveId } from '../resolve-id.function';

/**
 * Get switch value in object instance.
 *
 * @param objectInstance Object instance.
 * @param key Switch ID or name.
 * @returns Resolved switch value or `undefined`.
 */
export function getSwitchValue(objectInstance: AgtkObjectInstance, key: number | string) {
  const id = resolveId(objectInstance, ObjectInstanceAccessorType.Switches, key);

  if (id === -1) {
    return;
  }

  return objectInstance.switches.get(id).getValue();
}
