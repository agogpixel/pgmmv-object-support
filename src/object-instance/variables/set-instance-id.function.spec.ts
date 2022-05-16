import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setInstanceId } from './set-instance-id.function';

describe('setInstanceId', () => {
  it('is a function', () => expect(typeof setInstanceId).toBe('function'));

  it('sets value', () => expect(() => setInstanceId(createMockObjectInstance(), 17)).not.toThrow());
});
