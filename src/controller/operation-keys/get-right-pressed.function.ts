import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getRightPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyRight, controllerId);
}
