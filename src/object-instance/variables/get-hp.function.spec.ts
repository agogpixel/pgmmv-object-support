import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getHP } from './get-hp.function';

describe('getHP', () => {
  it('is a function', () => expect(typeof getHP).toBe('function'));

  it('gets value', () => expect(getHP(createMockObjectInstance())).toEqual(-1));
});
