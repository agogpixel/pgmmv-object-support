/**
 * Exports object instance set follow connected physics switch variable value function.
 *
 * @module object-instance/switches/set-follow-connected-physics.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { setSwitchValue } from './set-switch-value.function';

/**
 * Set follow connected physics switch value.
 *
 * @param objectInstance Object instance.
 * @param value Value to be set.
 */
export function setFollowConnectedPhysics(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.FollowConnectedPhysicsId, value);
}
