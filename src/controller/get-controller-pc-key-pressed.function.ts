import { getControllerPcKeyValue } from './get-controller-pc-key-value.function';

export function getControllerPcKeyPressed(keyCode: number) {
  if (getControllerPcKeyValue(keyCode) !== 0) {
    return true;
  }

  return false;
}
