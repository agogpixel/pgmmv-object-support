import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getMaxHP } from './get-max-hp.function';

describe('getMaxHP', () => {
  it('is a function', () => expect(typeof getMaxHP).toBe('function'));

  it('gets value', () => expect(getMaxHP(createMockObjectInstance())).toEqual(-1));
});
