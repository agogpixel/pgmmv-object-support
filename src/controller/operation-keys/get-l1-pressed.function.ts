import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getL1Pressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyL1, controllerId);
}
