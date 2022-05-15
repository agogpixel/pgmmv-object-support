import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setInvincibility } from './set-invincibility.function';

describe('setInvincibility', () => {
  it('is a function', () => expect(typeof setInvincibility).toBe('function'));

  it('sets value', () => expect(() => setInvincibility(createMockObjectInstance(), true)).not.toThrow());
});
