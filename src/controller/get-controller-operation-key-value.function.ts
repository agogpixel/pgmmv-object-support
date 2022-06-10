import { getControllerMaxId } from './get-controller-max-id.function';

export function getControllerOperationKeyValue(operationKeyId: number, controllerId?: number) {
  if (typeof controllerId === 'number') {
    return Agtk.controllers.getOperationKeyValue(controllerId, operationKeyId);
  }

  const maxId = getControllerMaxId();

  for (let i = 0; i <= maxId; ++i) {
    const value = Agtk.controllers.getOperationKeyValue(i, operationKeyId);

    if (value !== 0) {
      return value;
    }
  }

  return 0;
}
