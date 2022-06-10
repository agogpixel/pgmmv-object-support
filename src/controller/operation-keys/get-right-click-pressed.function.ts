import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getRightClickPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyRightClick, controllerId);
}
