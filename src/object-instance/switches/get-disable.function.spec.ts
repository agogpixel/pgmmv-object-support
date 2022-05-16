import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getDisable } from './get-disable.function';

describe('getDisable', () => {
  it('is a function', () => expect(typeof getDisable).toBe('function'));

  it('gets value', () => expect(getDisable(createMockObjectInstance())).toEqual(false));
});
