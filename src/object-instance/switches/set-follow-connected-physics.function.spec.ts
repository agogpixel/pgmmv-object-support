import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setFollowConnectedPhysics } from './set-follow-connected-physics.function';

describe('setFollowConnectedPhysics', () => {
  it('is a function', () => expect(typeof setFollowConnectedPhysics).toBe('function'));

  it('sets value', () => expect(() => setFollowConnectedPhysics(createMockObjectInstance(), true)).not.toThrow());
});
