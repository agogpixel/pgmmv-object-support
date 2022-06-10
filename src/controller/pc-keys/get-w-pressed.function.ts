import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getWPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_W);
}
