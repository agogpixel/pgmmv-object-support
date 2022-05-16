/**
 * Exports object instance set area detection variable value function.
 *
 * @module object-instance/variables/set-area-detection.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set area detection variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setAreaDetection(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.AreaAttributeId, value);
}
