import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setTimeOfInvincibility } from './set-time-of-invincibility.function';

describe('setTimeOfInvincibility', () => {
  it('is a function', () => expect(typeof setTimeOfInvincibility).toBe('function'));

  it('sets value', () => expect(() => setTimeOfInvincibility(createMockObjectInstance(), 17)).not.toThrow());
});
