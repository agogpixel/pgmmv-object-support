import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getAnimationFrame } from './get-animation-frame.function';

describe('getAnimationFrame', () => {
  it('is a function', () => expect(typeof getAnimationFrame).toBe('function'));

  it('gets value', () => expect(getAnimationFrame(createMockObjectInstance())).toEqual(-1));
});
