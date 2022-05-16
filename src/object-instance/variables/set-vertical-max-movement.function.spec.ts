import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setVerticalMaxMovement } from './set-vertical-max-movement.function';

describe('setVerticalMaxMovement', () => {
  it('is a function', () => expect(typeof setVerticalMaxMovement).toBe('function'));

  it('sets value', () => expect(() => setVerticalMaxMovement(createMockObjectInstance(), 17)).not.toThrow());
});
