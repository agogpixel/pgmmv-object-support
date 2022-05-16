/**
 * Exports object instance set critical boost variable value function.
 *
 * @module object-instance/variables/set-critical-boost.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set critical boost variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setCriticalBoost(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.CriticalRatioId, value);
}
