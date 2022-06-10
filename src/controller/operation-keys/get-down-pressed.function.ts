import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getDownPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyDown, controllerId);
}
