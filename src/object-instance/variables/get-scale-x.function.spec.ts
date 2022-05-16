import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getScaleX } from './get-scale-x.function';

describe('getScaleX', () => {
  it('is a function', () => expect(typeof getScaleX).toBe('function'));

  it('gets value', () => expect(getScaleX(createMockObjectInstance())).toEqual(-1));
});
