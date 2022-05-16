import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setObjectId } from './set-object-id.function';

describe('setObjectId', () => {
  it('is a function', () => expect(typeof setObjectId).toBe('function'));

  it('sets value', () => expect(() => setObjectId(createMockObjectInstance(), 17)).not.toThrow());
});
