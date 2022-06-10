import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getLeftClickValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_LeftClick);
}
