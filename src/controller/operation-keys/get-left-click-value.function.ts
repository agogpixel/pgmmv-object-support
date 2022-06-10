import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getLeftClickValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyLeftClick, controllerId);
}
