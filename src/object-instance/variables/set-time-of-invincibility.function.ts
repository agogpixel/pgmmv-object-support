/**
 * Exports object instance set time of invincibility variable value function.
 *
 * @module object-instance/variables/set-time-of-invincibility.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set time of invincibility variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setTimeOfInvincibility(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.InvincibleDurationId, value);
}
