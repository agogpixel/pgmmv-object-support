import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getL2Pressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyL2, controllerId);
}
