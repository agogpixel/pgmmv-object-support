import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setHorizontalMaxMovement } from './set-horizontal-max-movement.function';

describe('setHorizontalMaxMovement', () => {
  it('is a function', () => expect(typeof setHorizontalMaxMovement).toBe('function'));

  it('sets value', () => expect(() => setHorizontalMaxMovement(createMockObjectInstance(), 17)).not.toThrow());
});
