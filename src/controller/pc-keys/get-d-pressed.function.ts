import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getDPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_D);
}
