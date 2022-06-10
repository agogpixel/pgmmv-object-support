import { getCurrentSceneInstance } from './get-current-scene-instance.function';

export function getCurrentSceneInstanceHudLayer() {
  return getCurrentSceneInstance().getHudLayer();
}
