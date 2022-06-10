import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getLeftStickRightValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyLeftStickRight, controllerId);
}
