import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getR1Pressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyR1, controllerId);
}
