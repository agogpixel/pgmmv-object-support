import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getNumSameInstancesPlacedInScene } from './get-num-same-instances-placed-in-scene.function';

describe('getNumSameInstancesPlacedInScene', () => {
  it('is a function', () => expect(typeof getNumSameInstancesPlacedInScene).toBe('function'));

  it('gets value', () => expect(getNumSameInstancesPlacedInScene(createMockObjectInstance())).toEqual(-1));
});
