import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getSelectValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeySelect, controllerId);
}
