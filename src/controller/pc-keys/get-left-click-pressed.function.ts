import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getLeftClickPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_LeftClick);
}
