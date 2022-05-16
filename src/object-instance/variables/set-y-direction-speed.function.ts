/**
 * Exports object instance set y direction speed variable value function.
 *
 * @module object-instance/variables/set-y-direction-speed.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set y direction speed variable variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setYDirectionSpeed(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.VelocityYId, value);
}
