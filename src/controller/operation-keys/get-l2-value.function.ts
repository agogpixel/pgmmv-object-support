import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getL2Value(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyL2, controllerId);
}
