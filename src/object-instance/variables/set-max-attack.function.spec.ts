import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setMaxAttack } from './set-max-attack.function';

describe('setMaxAttack', () => {
  it('is a function', () => expect(typeof setMaxAttack).toBe('function'));

  it('sets value', () => expect(() => setMaxAttack(createMockObjectInstance(), 17)).not.toThrow());
});
