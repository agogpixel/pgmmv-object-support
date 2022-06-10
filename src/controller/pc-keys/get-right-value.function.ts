import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getRightValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_Right);
}
