import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getHorizontalDeceleration } from './get-horizontal-deceleration.function';

describe('getHorizontalDeceleration', () => {
  it('is a function', () => expect(typeof getHorizontalDeceleration).toBe('function'));

  it('gets value', () => expect(getHorizontalDeceleration(createMockObjectInstance())).toEqual(-1));
});
