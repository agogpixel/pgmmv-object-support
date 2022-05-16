import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setDisplayDirection } from './set-display-direction.function';

describe('setDisplayDirection', () => {
  it('is a function', () => expect(typeof setDisplayDirection).toBe('function'));

  it('sets value', () => expect(() => setDisplayDirection(createMockObjectInstance(), 17)).not.toThrow());
});
