import { getCurrentSceneInstance } from './get-current-scene-instance.function';

export function getCurrentSceneInstanceLayerByIndex(index: number) {
  return getCurrentSceneInstance().getLayerByIndex(index);
}
