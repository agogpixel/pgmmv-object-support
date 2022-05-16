import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getVerticalDeceleration } from './get-vertical-deceleration.function';

describe('getVerticalDeceleration', () => {
  it('is a function', () => expect(typeof getVerticalDeceleration).toBe('function'));

  it('gets value', () => expect(getVerticalDeceleration(createMockObjectInstance())).toEqual(-1));
});
