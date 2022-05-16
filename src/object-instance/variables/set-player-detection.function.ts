/**
 * Exports object instance set player detection variable value function.
 *
 * @module object-instance/variables/set-player-detection.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set player detection variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setPlayerDetection(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.PlayerIDId, value);
}
