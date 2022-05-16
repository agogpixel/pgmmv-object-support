import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setScaleY } from './set-scale-y.function';

describe('setScaleY', () => {
  it('is a function', () => expect(typeof setScaleY).toBe('function'));

  it('sets value', () => expect(() => setScaleY(createMockObjectInstance(), 17)).not.toThrow());
});
