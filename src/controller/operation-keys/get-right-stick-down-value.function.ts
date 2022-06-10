import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getRightStickDownValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyRightStickDown, controllerId);
}
