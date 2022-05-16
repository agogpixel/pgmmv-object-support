import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setHorizontalDeceleration } from './set-horizontal-deceleration.function';

describe('setHorizontalDeceleration', () => {
  it('is a function', () => expect(typeof setHorizontalDeceleration).toBe('function'));

  it('sets value', () => expect(() => setHorizontalDeceleration(createMockObjectInstance(), 17)).not.toThrow());
});
