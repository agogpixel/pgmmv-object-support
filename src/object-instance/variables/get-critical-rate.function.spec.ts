import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getCriticalRate } from './get-critical-rate.function';

describe('getCriticalRate', () => {
  it('is a function', () => expect(typeof getCriticalRate).toBe('function'));

  it('gets value', () => expect(getCriticalRate(createMockObjectInstance())).toEqual(-1));
});
