/**
 * Exports object instance get follow connected physics switch variable value function.
 *
 * @module object-instance/switches/get-follow-connected-physics.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getSwitchValue } from './get-switch-value.function';

/**
 * Get follow connected physics switch value.
 *
 * @param objectInstance Object instance.
 * @returns Switch value.
 */
export function getFollowConnectedPhysics(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.FollowConnectedPhysicsId) as boolean;
}
