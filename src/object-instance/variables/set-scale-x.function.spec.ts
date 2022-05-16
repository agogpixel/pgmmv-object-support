import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setScaleX } from './set-scale-x.function';

describe('setScaleX', () => {
  it('is a function', () => expect(typeof setScaleX).toBe('function'));

  it('sets value', () => expect(() => setScaleX(createMockObjectInstance(), 17)).not.toThrow());
});
