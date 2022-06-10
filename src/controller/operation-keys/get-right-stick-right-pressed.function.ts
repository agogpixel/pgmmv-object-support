import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getRightStickRightPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyRightStickRight, controllerId);
}
