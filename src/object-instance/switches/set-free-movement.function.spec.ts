import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setFreeMovement } from './set-free-movement.function';

describe('setFreeMovement', () => {
  it('is a function', () => expect(typeof setFreeMovement).toBe('function'));

  it('sets value', () => expect(() => setFreeMovement(createMockObjectInstance(), true)).not.toThrow());
});
