import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getStartValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyStart, controllerId);
}
