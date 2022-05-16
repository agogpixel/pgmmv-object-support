import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getAffectOtherPhysics } from './get-affect-other-physics.function';

describe('getAffectOtherPhysics', () => {
  it('is a function', () => expect(typeof getAffectOtherPhysics).toBe('function'));

  it('gets value', () => expect(getAffectOtherPhysics(createMockObjectInstance())).toEqual(false));
});
