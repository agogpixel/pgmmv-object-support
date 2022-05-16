/**
 * Exports object instance get duration take over accelerated speed variable value function.
 *
 * @module object-instance/variables/get-duration-take-over-accelerated-speed.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getVariableValue } from './get-variable-value.function';

/**
 * Get duration take over accelerated speed variable value.
 *
 * @param objectInstance Object instance.
 * @returns Variable value.
 */
export function getDurationTakeOverAcceleratedSpeed(objectInstance: AgtkObjectInstance) {
  return getVariableValue(
    objectInstance,
    Agtk.constants.objects.variables.DurationToTakeOverAccelerationMoveSpeedId
  ) as number;
}
