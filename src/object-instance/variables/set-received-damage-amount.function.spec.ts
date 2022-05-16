import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setReceivedDamageAmount } from './set-received-damage-amount.function';

describe('setReceivedDamageAmount', () => {
  it('is a function', () => expect(typeof setReceivedDamageAmount).toBe('function'));

  it('sets value', () => expect(() => setReceivedDamageAmount(createMockObjectInstance(), 17)).not.toThrow());
});
