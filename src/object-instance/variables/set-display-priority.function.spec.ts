import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setDisplayPriority } from './set-display-priority.function';

describe('setDisplayPriority', () => {
  it('is a function', () => expect(typeof setDisplayPriority).toBe('function'));

  it('sets value', () => expect(() => setDisplayPriority(createMockObjectInstance(), 17)).not.toThrow());
});
