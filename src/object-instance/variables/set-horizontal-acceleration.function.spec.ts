import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setHorizontalAcceleration } from './set-horizontal-acceleration.function';

describe('setHorizontalAcceleration', () => {
  it('is a function', () => expect(typeof setHorizontalAcceleration).toBe('function'));

  it('sets value', () => expect(() => setHorizontalAcceleration(createMockObjectInstance(), 17)).not.toThrow());
});
