import { getControllerOperationKeyPressed } from '../get-controller-operation-key-pressed.function';

export function getHomePressed(controllerId?: number) {
  return getControllerOperationKeyPressed(Agtk.constants.controllers.OperationKeyHome, controllerId);
}
