import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setMinAttack } from './set-min-attack.function';

describe('setMinAttack', () => {
  it('is a function', () => expect(typeof setMinAttack).toBe('function'));

  it('sets value', () => expect(() => setMinAttack(createMockObjectInstance(), 17)).not.toThrow());
});
