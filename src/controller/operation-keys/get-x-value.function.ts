import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getXValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyX, controllerId);
}
