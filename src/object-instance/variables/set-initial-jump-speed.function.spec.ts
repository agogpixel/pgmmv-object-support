import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setInitialJumpSpeed } from './set-initial-jump-speed.function';

describe('setInitialJumpSpeed', () => {
  it('is a function', () => expect(typeof setInitialJumpSpeed).toBe('function'));

  it('sets value', () => expect(() => setInitialJumpSpeed(createMockObjectInstance(), 17)).not.toThrow());
});
