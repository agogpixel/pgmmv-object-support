import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getWheelUpValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_WheelUp);
}
