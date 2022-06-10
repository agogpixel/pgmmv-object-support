import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getLeftStickRightPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyLeftStickRight, controllerId);
}
