import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { setSwitchValue } from './set-switch-value';

export function setCriticalReceived(objectInstance: AgtkObjectInstance, value: boolean) {
  setSwitchValue(objectInstance, Agtk.constants.objects.switches.CriticalDamagedId, value);
}
