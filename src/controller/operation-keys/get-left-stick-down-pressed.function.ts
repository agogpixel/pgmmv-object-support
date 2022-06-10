import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getLeftStickDownPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyLeftStickDown, controllerId);
}
