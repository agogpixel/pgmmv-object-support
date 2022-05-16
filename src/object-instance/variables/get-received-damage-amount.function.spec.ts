import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getReceivedDamageAmount } from './get-received-damage-amount.function';

describe('getReceivedDamageAmount', () => {
  it('is a function', () => expect(typeof getReceivedDamageAmount).toBe('function'));

  it('gets value', () => expect(getReceivedDamageAmount(createMockObjectInstance())).toEqual(-1));
});
