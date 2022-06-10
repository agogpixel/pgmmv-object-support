import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getRightPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_Right);
}
