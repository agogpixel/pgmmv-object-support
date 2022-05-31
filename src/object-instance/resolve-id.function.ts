/**
 * Exports object instance switch/variable resolve ID function.
 *
 * @module object-instance/resolve-id.function
 */
import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance/object-instance';

import type { ObjectInstanceAccessorType } from './object-instance-accessor-type.enum';

/**
 * Resolve switch or variable ID.
 *
 * @param objectInstance Object instance.
 * @param type Accessor type.
 * @param idOrName ID or name of switch/variable.
 * @returns ID or -1 when name not found.
 */
export function resolveId(
  objectInstance: AgtkObjectInstance,
  type: ObjectInstanceAccessorType,
  idOrName: number | string
) {
  if (typeof idOrName === 'string') {
    return objectInstance[type].getIdByName(idOrName);
  }

  return idOrName;
}
