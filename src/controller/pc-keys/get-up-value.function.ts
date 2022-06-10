import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getUpValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_Up);
}
