import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getYPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyY, controllerId);
}
