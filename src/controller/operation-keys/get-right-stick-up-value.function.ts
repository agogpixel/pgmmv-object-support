import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getRightStickUpValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyRightStickUp, controllerId);
}
