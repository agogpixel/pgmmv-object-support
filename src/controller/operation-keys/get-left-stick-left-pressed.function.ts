import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getLeftStickLeftPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyLeftStickLeft, controllerId);
}
