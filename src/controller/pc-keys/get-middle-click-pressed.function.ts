import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getMiddleClickPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_MiddleClick);
}
