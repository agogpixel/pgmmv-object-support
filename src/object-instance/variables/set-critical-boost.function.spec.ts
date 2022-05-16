import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setCriticalBoost } from './set-critical-boost.function';

describe('setCriticalBoost', () => {
  it('is a function', () => expect(typeof setCriticalBoost).toBe('function'));

  it('sets value', () => expect(() => setCriticalBoost(createMockObjectInstance(), 17)).not.toThrow());
});
