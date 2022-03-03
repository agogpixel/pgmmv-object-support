import type { AgtkObjectInstance } from '@agogpixel/pgmmv-ts/api/agtk/object-instance';

import { setVariableValue } from './set-variable-value';

export function setDurationTakeOverAcceleratedSpeed(objectInstance: AgtkObjectInstance, value: number) {
  setVariableValue(objectInstance, Agtk.constants.objects.variables.DurationToTakeOverAccelerationMoveSpeedId, value);
}
