import { getCurrentSceneInstance } from './get-current-scene-instance.function';

export function getCurrentSceneInstanceMenuLayerById(id: number) {
  return getCurrentSceneInstance().getMenuLayerById(id);
}
