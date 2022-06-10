import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getBPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyB, controllerId);
}
