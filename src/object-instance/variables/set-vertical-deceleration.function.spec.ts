import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setVerticalDeceleration } from './set-vertical-deceleration.function';

describe('setVerticalDeceleration', () => {
  it('is a function', () => expect(typeof setVerticalDeceleration).toBe('function'));

  it('sets value', () => expect(() => setVerticalDeceleration(createMockObjectInstance(), 17)).not.toThrow());
});
