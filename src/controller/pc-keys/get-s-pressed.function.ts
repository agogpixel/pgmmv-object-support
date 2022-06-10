import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getSPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_S);
}
