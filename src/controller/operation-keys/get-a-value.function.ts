import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getAValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyA, controllerId);
}
