import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setDisable } from './set-disable.function';

describe('setDisable', () => {
  it('is a function', () => expect(typeof setDisable).toBe('function'));

  it('sets value', () => expect(() => setDisable(createMockObjectInstance(), true)).not.toThrow());
});
