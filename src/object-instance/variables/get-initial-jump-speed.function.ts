/**
 * Exports object instance get initial jump speed variable value function.
 *
 * @module object-instance/variables/get-initial-jump-speed.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get initial jump speed variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getInitialJumpSpeed(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.InitialJumpSpeedId) as number;
}
