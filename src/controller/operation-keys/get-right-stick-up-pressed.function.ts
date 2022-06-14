import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getRightStickUpPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyRightStickUp, controllerId);
}