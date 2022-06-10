import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getXPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyX, controllerId);
}
