import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setParentObjectInstanceId } from './set-parent-object-instance-id.function';

describe('setParentObjectInstanceId', () => {
  it('is a function', () => expect(typeof setParentObjectInstanceId).toBe('function'));

  it('sets value', () => expect(() => setParentObjectInstanceId(createMockObjectInstance(), 17)).not.toThrow());
});
