import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getAPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_A);
}
