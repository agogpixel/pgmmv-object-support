import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getLeftStickUpPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyLeftStickUp, controllerId);
}
