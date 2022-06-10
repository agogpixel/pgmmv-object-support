import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getLeftPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_Left);
}
