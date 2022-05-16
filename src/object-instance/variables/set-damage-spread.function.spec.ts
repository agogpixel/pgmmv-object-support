import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setDamageSpread } from './set-damage-spread.function';

describe('setDamageSpread', () => {
  it('is a function', () => expect(typeof setDamageSpread).toBe('function'));

  it('sets value', () => expect(() => setDamageSpread(createMockObjectInstance(), 17)).not.toThrow());
});
