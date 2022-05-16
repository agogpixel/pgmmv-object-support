/**
 * Exports object instance get num same instance placed in scene variable value function.
 *
 * @module object-instance/variables/get-num-same-instance-placed-in-scene.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get num same instance placed in scene variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getNumSameInstancesPlacedInScene(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.InstanceCountId) as number;
}
