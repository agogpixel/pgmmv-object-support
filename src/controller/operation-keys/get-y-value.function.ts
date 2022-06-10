import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getYValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyY, controllerId);
}
