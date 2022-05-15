import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setLockTarget } from './set-lock-target.function';

describe('setLockTarget', () => {
  it('is a function', () => expect(typeof setLockTarget).toBe('function'));

  it('sets value', () => expect(() => setLockTarget(createMockObjectInstance(), true)).not.toThrow());
});
