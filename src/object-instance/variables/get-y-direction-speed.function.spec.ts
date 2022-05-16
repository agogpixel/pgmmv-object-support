import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getYDirectionSpeed } from './get-y-direction-speed.function';

describe('getYDirectionSpeed', () => {
  it('is a function', () => expect(typeof getYDirectionSpeed).toBe('function'));

  it('gets value', () => expect(getYDirectionSpeed(createMockObjectInstance())).toEqual(-1));
});
