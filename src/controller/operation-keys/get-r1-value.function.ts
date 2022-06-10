import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getR1Value(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyR1, controllerId);
}
