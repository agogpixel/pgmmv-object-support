import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getLeftValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyLeft, controllerId);
}
