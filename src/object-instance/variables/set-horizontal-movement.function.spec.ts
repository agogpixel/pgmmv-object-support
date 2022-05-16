import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setHorizontalMovement } from './set-horizontal-movement.function';

describe('setHorizontalMovement', () => {
  it('is a function', () => expect(typeof setHorizontalMovement).toBe('function'));

  it('sets value', () => expect(() => setHorizontalMovement(createMockObjectInstance(), 17)).not.toThrow());
});
