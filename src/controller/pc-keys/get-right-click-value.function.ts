import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getRightClickValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_RightClick);
}
