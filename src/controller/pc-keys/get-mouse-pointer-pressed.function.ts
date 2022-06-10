import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getMousePointerPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_MousePointer);
}
