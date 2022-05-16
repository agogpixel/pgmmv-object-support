import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getAttackAttribute } from './get-attack-attribute.function';

describe('getAttackAttribute', () => {
  it('is a function', () => expect(typeof getAttackAttribute).toBe('function'));

  it('gets value', () => expect(getAttackAttribute(createMockObjectInstance())).toEqual(-1));
});
