import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getDamageSpread } from './get-damage-spread.function';

describe('getDamageSpread', () => {
  it('is a function', () => expect(typeof getDamageSpread).toBe('function'));

  it('gets value', () => expect(getDamageSpread(createMockObjectInstance())).toEqual(-1));
});
