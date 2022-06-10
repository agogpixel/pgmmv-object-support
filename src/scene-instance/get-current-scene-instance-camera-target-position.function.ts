import { getCurrentSceneInstance } from './get-current-scene-instance.function';

export function getCurrentSceneInstanceCameraTargetPosition() {
  return getCurrentSceneInstance().getCurrentCameraTargetPos();
}
