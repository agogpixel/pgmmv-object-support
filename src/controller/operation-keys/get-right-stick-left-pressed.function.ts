import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getRightStickLeftPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyRightStickLeft, controllerId);
}
