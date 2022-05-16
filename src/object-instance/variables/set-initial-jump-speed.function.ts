/**
 * Exports object instance set initial jump speed variable value function.
 *
 * @module object-instance/variables/set-initial-jump-speed.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set initial jump speed variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setInitialJumpSpeed(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.InitialJumpSpeedId, value);
}
