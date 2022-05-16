import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getMaxAttack } from './get-max-attack.function';

describe('getMaxAttack', () => {
  it('is a function', () => expect(typeof getMaxAttack).toBe('function'));

  it('gets value', () => expect(getMaxAttack(createMockObjectInstance())).toEqual(-1));
});
