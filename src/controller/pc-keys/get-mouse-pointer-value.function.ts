import { getControllerPcKeyValue } from '../get-controller-pc-key-value.function';

export function getMousePointerValue() {
  return getControllerPcKeyValue(Agtk.constants.controllers.ReservedKeyCodePc_MousePointer);
}
