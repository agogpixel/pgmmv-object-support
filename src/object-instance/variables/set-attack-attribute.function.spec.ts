import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setAttackAttribute } from './set-attack-attribute.function';

describe('setAttackAttribute', () => {
  it('is a function', () => expect(typeof setAttackAttribute).toBe('function'));

  it('sets value', () => expect(() => setAttackAttribute(createMockObjectInstance(), 17)).not.toThrow());
});
