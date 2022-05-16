import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getVerticalAcceleration } from './get-vertical-acceleration.function';

describe('getVerticalAcceleration', () => {
  it('is a function', () => expect(typeof getVerticalAcceleration).toBe('function'));

  it('gets value', () => expect(getVerticalAcceleration(createMockObjectInstance())).toEqual(-1));
});
