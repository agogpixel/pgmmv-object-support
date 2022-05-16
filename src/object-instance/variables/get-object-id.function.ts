/**
 * Exports object instance get object ID variable value function.
 *
 * @module object-instance/variables/get-object-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get object ID variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getObjectId(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.ObjectIDId) as number;
}
