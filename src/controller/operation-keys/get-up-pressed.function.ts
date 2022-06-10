import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getUpPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyUp, controllerId);
}
