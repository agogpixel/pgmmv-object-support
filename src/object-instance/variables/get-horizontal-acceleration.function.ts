/**
 * Exports object instance get horizontal acceleration variable value function.
 *
 * @module object-instance/variables/get-horizontal-acceleration.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get horizontal acceleration variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getHorizontalAcceleration(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.HorizontalAccelId) as number;
}
