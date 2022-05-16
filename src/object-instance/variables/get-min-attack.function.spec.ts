import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getMinAttack } from './get-min-attack.function';

describe('getMinAttack', () => {
  it('is a function', () => expect(typeof getMinAttack).toBe('function'));

  it('gets value', () => expect(getMinAttack(createMockObjectInstance())).toEqual(-1));
});
