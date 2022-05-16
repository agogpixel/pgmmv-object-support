import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setVerticalAcceleration } from './set-vertical-acceleration.function';

describe('setVerticalAcceleration', () => {
  it('is a function', () => expect(typeof setVerticalAcceleration).toBe('function'));

  it('sets value', () => expect(() => setVerticalAcceleration(createMockObjectInstance(), 17)).not.toThrow());
});
