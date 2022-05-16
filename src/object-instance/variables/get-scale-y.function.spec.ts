import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getScaleY } from './get-scale-y.function';

describe('getScaleY', () => {
  it('is a function', () => expect(typeof getScaleY).toBe('function'));

  it('gets value', () => expect(getScaleY(createMockObjectInstance())).toEqual(-1));
});
