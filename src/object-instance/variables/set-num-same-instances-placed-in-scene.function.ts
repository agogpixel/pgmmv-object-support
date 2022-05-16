/**
 * Exports object instance set num same instance placed in scene variable value function.
 *
 * @module object-instance/variables/set-num-same-instance-placed-in-scene.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set num same instance placed in scene variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setNumSameInstancesPlacedInScene(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.InstanceCountId, value);
}
