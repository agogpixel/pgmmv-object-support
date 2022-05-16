import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getObjectId } from './get-object-id.function';

describe('getObjectId', () => {
  it('is a function', () => expect(typeof getObjectId).toBe('function'));

  it('gets value', () => expect(getObjectId(createMockObjectInstance())).toEqual(-1));
});
