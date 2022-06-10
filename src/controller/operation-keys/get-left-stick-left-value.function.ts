import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getLeftStickLeftValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyLeftStickLeft, controllerId);
}
