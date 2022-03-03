import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { getVariableValue } from './get-variable-value';

export function getInstanceId(objectInstance: AgtkObjectInstance) {
  return getVariableValue(objectInstance, Agtk.constants.objects.variables.InstanceIDId);
}
