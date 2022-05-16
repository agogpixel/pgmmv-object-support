/**
 * Exports object instance get area detection variable value function.
 *
 * @module object-instance/variables/get-area-detection.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get area detection variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getAreaDetection(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.AreaAttributeId) as number;
}
