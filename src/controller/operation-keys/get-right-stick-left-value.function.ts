import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getRightStickLeftValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyRightStickLeft, controllerId);
}
