import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getWValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_W);
}
