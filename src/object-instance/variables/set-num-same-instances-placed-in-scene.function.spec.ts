import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setNumSameInstancesPlacedInScene } from './set-num-same-instances-placed-in-scene.function';

describe('setNumSameInstancesPlacedInScene', () => {
  it('is a function', () => expect(typeof setNumSameInstancesPlacedInScene).toBe('function'));

  it('sets value', () => expect(() => setNumSameInstancesPlacedInScene(createMockObjectInstance(), 17)).not.toThrow());
});
