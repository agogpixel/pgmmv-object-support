/**
 * Exports object instance set duration take over accelerated speed variable value function.
 *
 * @module object-instance/variables/set-duration-take-over-accelerated-speed.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setVariableValue } from './set-variable-value.function';

/**
 * Set duration take over accelerated speed variable value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setDurationTakeOverAcceleratedSpeed(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.DurationToTakeOverAccelerationMoveSpeedId, value);
}
