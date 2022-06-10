import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getDownPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_Down);
}
