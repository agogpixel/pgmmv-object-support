import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setMaxHP } from './set-max-hp.function';

describe('setMaxHP', () => {
  it('is a function', () => expect(typeof setMaxHP).toBe('function'));

  it('sets value', () => expect(() => setMaxHP(createMockObjectInstance(), 17)).not.toThrow());
});
