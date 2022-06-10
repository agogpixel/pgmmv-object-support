import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getWheelUpPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_WheelUp);
}
