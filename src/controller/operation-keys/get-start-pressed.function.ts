import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getStartPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyStart, controllerId);
}
