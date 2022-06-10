import { getCurrentSceneInstance } from './get-current-scene-instance.function';

export function getCurrentSceneInstanceId() {
  return getCurrentSceneInstance().sceneId;
}
