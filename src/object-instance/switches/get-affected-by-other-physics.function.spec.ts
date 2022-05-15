import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getAffectedByOtherPhysics } from './get-affected-by-other-physics.function';

describe('getAffectedByOtherPhysics', () => {
  it('is a function', () => expect(typeof getAffectedByOtherPhysics).toBe('function'));

  it('gets value', () => expect(getAffectedByOtherPhysics(createMockObjectInstance())).toEqual(false));
});
