import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getSelectPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeySelect, controllerId);
}
