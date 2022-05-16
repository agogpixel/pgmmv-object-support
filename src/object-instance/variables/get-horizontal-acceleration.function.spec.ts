import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getHorizontalAcceleration } from './get-horizontal-acceleration.function';

describe('getHorizontalAcceleration', () => {
  it('is a function', () => expect(typeof getHorizontalAcceleration).toBe('function'));

  it('gets value', () => expect(getHorizontalAcceleration(createMockObjectInstance())).toEqual(-1));
});
