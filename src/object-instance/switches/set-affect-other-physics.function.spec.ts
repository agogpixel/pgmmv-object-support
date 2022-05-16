import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setAffectOtherPhysics } from './set-affect-other-physics.function';

describe('setAffectOtherPhysics', () => {
  it('is a function', () => expect(typeof setAffectOtherPhysics).toBe('function'));

  it('sets value', () => expect(() => setAffectOtherPhysics(createMockObjectInstance(), true)).not.toThrow());
});
