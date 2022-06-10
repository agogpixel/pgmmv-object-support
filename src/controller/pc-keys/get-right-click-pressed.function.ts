import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getRightClickPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_RightClick);
}
