import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getLeftStickDownValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyLeftStickDown, controllerId);
}
