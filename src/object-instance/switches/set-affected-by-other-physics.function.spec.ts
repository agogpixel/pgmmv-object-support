import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setAffectedByOtherPhysics } from './set-affected-by-other-physics.function';

describe('setAffectedByOtherPhysics', () => {
  it('is a function', () => expect(typeof setAffectedByOtherPhysics).toBe('function'));

  it('sets value', () => expect(() => setAffectedByOtherPhysics(createMockObjectInstance(), true)).not.toThrow());
});
