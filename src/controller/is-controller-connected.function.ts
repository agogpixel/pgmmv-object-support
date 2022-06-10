import { getControllerMaxId } from './get-controller-max-id.function';

export function isControllerConnected(controllerId?: number) {
  if (typeof controllerId === 'number') {
    return Agtk.controllers.isConnected(controllerId);
  }

  const maxId = getControllerMaxId();

  for (let i = 0; i <= maxId; ++i) {
    if (Agtk.controllers.isConnected(i)) {
      return true;
    }
  }

  return false;
}
