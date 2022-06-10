import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getLeftValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_Left);
}
