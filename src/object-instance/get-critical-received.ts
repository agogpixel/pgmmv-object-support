import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { getSwitchValue } from './get-switch-value';

export function getCriticalReceived(objectInstance: AgtkObjectInstance) {
  return getSwitchValue(objectInstance, Agtk.constants.objects.switches.CriticalDamagedId);
}
