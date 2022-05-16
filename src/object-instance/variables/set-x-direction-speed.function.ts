/**
 * Exports object instance set x direction speed variable value function.
 *
 * @module object-instance/variables/set-x-direction-speed.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set x direction speed variable variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setXDirectionSpeed(objectInstance: AgtkObjectInstance, value: number) {
  return setVariableValue(objectInstance, Agtk.constants.objects.variables.VelocityXId, value);
}
