import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setReceivedDamageRate } from './set-received-damage-rate.function';

describe('setReceivedDamageRate', () => {
  it('is a function', () => expect(typeof setReceivedDamageRate).toBe('function'));

  it('sets value', () => expect(() => setReceivedDamageRate(createMockObjectInstance(), 17)).not.toThrow());
});
