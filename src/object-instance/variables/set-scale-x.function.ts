/**
 * Exports object instance set scale x variable value function.
 *
 * @module object-instance/variables/set-scale-x.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set scale x variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setScaleX(objectInstance: AgtkObjectInstance, value: number) {
  return setVariableValue(objectInstance, Agtk.constants.objects.variables.ScalingXId, value);
}
