import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getOkPressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyOk, controllerId);
}
