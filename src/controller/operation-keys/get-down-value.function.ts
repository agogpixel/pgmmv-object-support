import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getDownValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyDown, controllerId);
}
