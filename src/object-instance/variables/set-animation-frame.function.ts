/**
 * Exports object instance set animation frame variable value function.
 *
 * @module object-instance/variables/set-animation-frame.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set animation frame variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setAnimationFrame(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.FixedAnimationFrameId, value);
}
