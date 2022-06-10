import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getLeftStickUpValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyLeftStickUp, controllerId);
}
