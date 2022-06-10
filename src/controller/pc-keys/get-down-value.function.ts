import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getDownValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_Down);
}
