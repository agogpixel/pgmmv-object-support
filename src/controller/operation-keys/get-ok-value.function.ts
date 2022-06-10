import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getOkValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyOk, controllerId);
}
