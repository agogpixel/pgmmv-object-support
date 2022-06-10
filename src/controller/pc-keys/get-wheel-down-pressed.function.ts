import { getControllerPcKeyPressed } from '../get-controller-pc-key-pressed.function';

export function getWheelDownPressed() {
  return getControllerPcKeyPressed(Agtk.constants.controllers.ReservedKeyCodePc_WhellDown);
}
