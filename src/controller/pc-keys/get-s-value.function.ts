import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getSValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_S);
}
