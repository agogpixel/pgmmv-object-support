import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getInstanceId } from './get-instance-id.function';

describe('getInstanceId', () => {
  it('is a function', () => expect(typeof getInstanceId).toBe('function'));

  it('gets value', () => expect(getInstanceId(createMockObjectInstance())).toEqual(-1));
});
