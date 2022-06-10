import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getWheelDownValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_WhellDown);
}
