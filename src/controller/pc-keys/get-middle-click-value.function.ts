import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getMiddleClickValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_MiddleClick);
}
