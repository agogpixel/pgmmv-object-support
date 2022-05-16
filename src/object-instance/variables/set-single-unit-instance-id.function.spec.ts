import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setSingleUnitInstanceId } from './set-single-unit-instance-id.function';

describe('setSingleUnitInstanceId', () => {
  it('is a function', () => expect(typeof setSingleUnitInstanceId).toBe('function'));

  it('sets value', () => expect(() => setSingleUnitInstanceId(createMockObjectInstance(), 17)).not.toThrow());
});
