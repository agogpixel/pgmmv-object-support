import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getTimeOfInvincibility } from './get-time-of-invincibility.function';

describe('getTimeOfInvincibility', () => {
  it('is a function', () => expect(typeof getTimeOfInvincibility).toBe('function'));

  it('gets value', () => expect(getTimeOfInvincibility(createMockObjectInstance())).toEqual(-1));
});
