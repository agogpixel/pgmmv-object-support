import { getControllerMaxId } from './get-controller-max-id.function';

export function getControllerOperationKeyPressed(operationKeyId: number, controllerId?: number) {
  if (typeof controllerId === 'number') {
    return Agtk.controllers.getOperationKeyPressed(controllerId, operationKeyId);
  }

  const maxId = getControllerMaxId();

  for (let i = 0; i <= maxId; ++i) {
    if (Agtk.controllers.getOperationKeyPressed(i, operationKeyId)) {
      return true;
    }
  }

  return false;
}
