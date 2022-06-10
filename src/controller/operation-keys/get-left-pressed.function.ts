import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getLeftPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyLeft, controllerId);
}
