/**
 * Exports object instance get controller ID variable value function.
 *
 * @module object-instance/variables/get-controller-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get controller ID variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getControllerId(objectInstance: AgtkObjectInstance) {
  // Controller ID values must be parsed for some reason - baz.
  return parseInt(
    getVariableValue(objectInstance, Agtk.constants.objects.variables.ControllerIDId) as unknown as string
  );
}
