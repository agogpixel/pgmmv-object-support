import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getCancelPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyCancel, controllerId);
}
