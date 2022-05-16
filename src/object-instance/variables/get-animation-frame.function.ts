/**
 * Exports object instance get animation frame variable value function.
 *
 * @module object-instance/variables/get-animation-frame.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get animation frame variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getAnimationFrame(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.FixedAnimationFrameId) as number;
}
