import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getAPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyA, controllerId);
}
