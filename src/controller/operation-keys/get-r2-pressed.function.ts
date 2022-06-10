import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getR2Pressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyR2, controllerId);
}
