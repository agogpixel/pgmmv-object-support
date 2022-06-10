import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getBValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyB, controllerId);
}
