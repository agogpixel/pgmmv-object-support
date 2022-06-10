import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getUpPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_Up);
}
