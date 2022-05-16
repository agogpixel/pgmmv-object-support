/**
 * Exports object instance set scale y variable value function.
 *
 * @module object-instance/variables/set-scale-y.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set scale y variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setScaleY(objectInstance: AgtkObjectInstance, value: number) {
  return setVariableValue(objectInstance, Agtk.constants.objects.variables.ScalingYId, value);
}
