import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setAnimationFrame } from './set-animation-frame.function';

describe('setAnimationFrame', () => {
  it('is a function', () => expect(typeof setAnimationFrame).toBe('function'));

  it('sets value', () => expect(() => setAnimationFrame(createMockObjectInstance(), 17)).not.toThrow());
});
