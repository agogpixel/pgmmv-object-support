import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setHP } from './set-hp.function';

describe('setHP', () => {
  it('is a function', () => expect(typeof setHP).toBe('function'));

  it('sets value', () => expect(() => setHP(createMockObjectInstance(), 17)).not.toThrow());
});
