import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getReceivedDamageRate } from './get-received-damage-rate.function';

describe('getReceivedDamageRate', () => {
  it('is a function', () => expect(typeof getReceivedDamageRate).toBe('function'));

  it('gets value', () => expect(getReceivedDamageRate(createMockObjectInstance())).toEqual(-1));
});
