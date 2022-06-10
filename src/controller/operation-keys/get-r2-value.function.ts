import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getR2Value(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyR2, controllerId);
}
