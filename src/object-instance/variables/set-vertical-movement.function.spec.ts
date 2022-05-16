import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setVerticalMovement } from './set-vertical-movement.function';

describe('setVerticalMovement', () => {
  it('is a function', () => expect(typeof setVerticalMovement).toBe('function'));

  it('sets value', () => expect(() => setVerticalMovement(createMockObjectInstance(), 17)).not.toThrow());
});
