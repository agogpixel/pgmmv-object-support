/**
 * Exports object instance get player detection variable value function.
 *
 * @module object-instance/variables/get-player-detection.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get player detection variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getPlayerDetection(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.PlayerIDId) as number;
}
