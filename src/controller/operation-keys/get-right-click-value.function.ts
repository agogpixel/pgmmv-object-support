import { getControllerOperationKeyValue } from '../get-controller-operation-key-value.function';

export function getRightClickValue(controllerId?: number) {
  return getControllerOperationKeyValue(Agtk.constants.controllers.OperationKeyRightClick, controllerId);
}
