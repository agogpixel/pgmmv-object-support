import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getFollowConnectedPhysics } from './get-follow-connected-physics.function';

describe('getFollowConnectedPhysics', () => {
  it('is a function', () => expect(typeof getFollowConnectedPhysics).toBe('function'));

  it('gets value', () => expect(getFollowConnectedPhysics(createMockObjectInstance())).toEqual(false));
});
