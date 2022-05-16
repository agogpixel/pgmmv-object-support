/**
 * Exports get parent object instance function.
 *
 * @module object-instance/get-parent-object-instance.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import { getObjectInstance } from './get-object-instance.function';
import { getParentObjectInstanceId } from './variables/get-parent-object-instance-id.function';

/**
 * Get parent object instance.
 *
 * @param childInstanceOrId Child object instance or ID.
 * @returns Reference to parent object instance or `undefined`.
 */
export function getParentObjectInstance(childInstanceOrId: number | AgtkObjectInstance) {
  let childInstance: AgtkObjectInstance;

  if (typeof childInstanceOrId === 'number') {
    childInstance = getObjectInstance(childInstanceOrId);
  } else {
    childInstance = childInstanceOrId;
  }

  const parentInstanceId = getParentObjectInstanceId(childInstance);

  if (parentInstanceId !== undefined && parentInstanceId !== -1) {
    return getObjectInstance(parentInstanceId);
  }
}
