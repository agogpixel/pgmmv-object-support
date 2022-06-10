import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getL1Value(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyL1, controllerId);
}
