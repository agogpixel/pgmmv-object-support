/**
 * Exports object instance set controller ID variable value function.
 *
 * @module object-instance/variables/set-controller-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set controller ID variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setControllerId(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.ControllerIDId, value);
}
