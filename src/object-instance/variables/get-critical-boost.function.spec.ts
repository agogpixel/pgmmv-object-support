import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getCriticalBoost } from './get-critical-boost.function';

describe('getCriticalBoost', () => {
  it('is a function', () => expect(typeof getCriticalBoost).toBe('function'));

  it('gets value', () => expect(getCriticalBoost(createMockObjectInstance())).toEqual(-1));
});
