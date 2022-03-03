import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { getObjectInstance } from './get-object-instance';
import { getParentObjectInstanceId } from './get-parent-object-instance-id';

export function getParentObjectInstance(childInstanceOrId: number | AgtkObjectInstance) {
  let childInstance: AgtkObjectInstance;

  if (typeof childInstanceOrId === 'number') {
    childInstance = getObjectInstance(childInstanceOrId);
  } else {
    childInstance = childInstanceOrId;
  }

  const parentInstanceId = getParentObjectInstanceId(childInstance);

  if (parentInstanceId !== -1) {
    return getObjectInstance(parentInstanceId);
  }
}
