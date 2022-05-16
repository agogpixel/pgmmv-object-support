import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getXDirectionSpeed } from './get-x-direction-speed.function';

describe('getXDirectionSpeed', () => {
  it('is a function', () => expect(typeof getXDirectionSpeed).toBe('function'));

  it('gets value', () => expect(getXDirectionSpeed(createMockObjectInstance())).toEqual(-1));
});
