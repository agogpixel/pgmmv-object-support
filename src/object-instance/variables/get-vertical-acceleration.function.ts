/**
 * Exports object instance get vertical acceleration variable value function.
 *
 * @module object-instance/variables/get-vertical-acceleration.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get vertical acceleration variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getVerticalAcceleration(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.VerticalAccelId) as number;
}
