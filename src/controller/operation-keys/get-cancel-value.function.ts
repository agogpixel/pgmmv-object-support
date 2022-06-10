import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getCancelValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyCancel, controllerId);
}
