import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getRightStickRightValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyRightStickRight, controllerId);
}
