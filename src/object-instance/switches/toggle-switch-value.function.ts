/**
 * Exports object instance toggle switch variable value function.
 *
 * @module object-instance/switches/toggle-switch-value.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { ObjectInstanceAccessorType } from '../object-instance-accessor-type.enum';
import { resolveId } from '../resolve-id.function';

/**
 * Toggle switch value in object instance.
 *
 * @param objectInstance Object instance.
 * @param key Switch ID or name.
 * @returns Toggled switch value or `undefined`.
 */
export function toggleSwitchValue(objectInstance: AgtkObjectInstance, key: number | string) {
  const id = resolveId(objectInstance, ObjectInstanceAccessorType.Switches, key);

  if (id === -1) {
    return;
  }

  const container = objectInstance.switches.get(id);
  const newValue = !container.getValue();
  container.setValue(newValue);

  return newValue;
}
