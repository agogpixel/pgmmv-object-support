import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setCriticalRate } from './set-critical-rate.function';

describe('setCriticalRate', () => {
  it('is a function', () => expect(typeof setCriticalRate).toBe('function'));

  it('sets value', () => expect(() => setCriticalRate(createMockObjectInstance(), 17)).not.toThrow());
});
