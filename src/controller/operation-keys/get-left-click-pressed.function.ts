import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getLeftClickPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyLeftClick, controllerId);
}
