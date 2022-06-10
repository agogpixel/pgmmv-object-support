import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getDValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_D);
}
