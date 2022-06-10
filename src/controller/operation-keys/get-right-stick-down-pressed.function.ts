import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getRightStickDownPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyRightStickDown, controllerId);
}
