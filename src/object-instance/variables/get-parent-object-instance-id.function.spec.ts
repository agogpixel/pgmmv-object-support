import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getParentObjectInstanceId } from './get-parent-object-instance-id.function';

describe('getParentObjectInstanceId', () => {
  it('is a function', () => expect(typeof getParentObjectInstanceId).toBe('function'));

  it('gets value', () => expect(getParentObjectInstanceId(createMockObjectInstance())).toEqual(-1));
});
