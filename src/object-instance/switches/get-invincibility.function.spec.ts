import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getInvincibility } from './get-invincibility.function';

describe('getInvincibility', () => {
  it('is a function', () => expect(typeof getInvincibility).toBe('function'));

  it('gets value', () => expect(getInvincibility(createMockObjectInstance())).toEqual(false));
});
