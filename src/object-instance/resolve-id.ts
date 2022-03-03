import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

export function resolveId(
  objectInstance: AgtkObjectInstance,
  type: 'switches' | 'variables',
  idOrName: number | string
) {
  if (typeof idOrName === 'string') {
    return objectInstance[type].getIdByName(idOrName);
  }

  return idOrName;
}
