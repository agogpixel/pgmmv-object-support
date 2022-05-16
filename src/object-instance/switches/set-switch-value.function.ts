/**
 * Exports object instance set switch variable value function.
 *
 * @module object-instance/switches/set-switch-value.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { ObjectInstanceAccessorType } from '../object-instance-accessor-type.enum';
import { resolveId } from '../resolve-id.function';

/**
 * Set switch value in object instance.
 *
 * @param objectInstance Object instance.
 * @param key Switch ID or name.
 * @param value Value to be set.
 */
export function setSwitchValue(objectInstance: AgtkObjectInstance, key: number | string, value: boolean) {
  const id = resolveId(objectInstance, ObjectInstanceAccessorType.Switches, key);

  if (id === -1) {
    return;
  }

  objectInstance.switches.get(id).setValue(value);
}
