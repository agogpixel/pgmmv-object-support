import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getHomeValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyHome, controllerId);
}
