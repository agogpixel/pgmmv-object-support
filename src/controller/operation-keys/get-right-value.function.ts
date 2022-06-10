import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getRightValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyRight, controllerId);
}
