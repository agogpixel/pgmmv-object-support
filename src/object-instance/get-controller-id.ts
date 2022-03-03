import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { getVariableValue } from './get-variable-value';

export function getControllerId(objectInstance: AgtkObjectInstance) {
  // Controller ID values must be parsed for some reason - baz
  return parseInt(
    getVariableValue(objectInstance, Agtk.constants.objects.variables.ControllerIDId) as unknown as string
  );
}
