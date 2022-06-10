import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getAValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_A);
}
