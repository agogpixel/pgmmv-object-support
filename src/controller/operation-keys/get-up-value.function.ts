import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getUpValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyUp, controllerId);
}
