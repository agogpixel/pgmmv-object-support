import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setControllerId } from './set-controller-id.function';

describe('setControllerId', () => {
  it('is a function', () => expect(typeof setControllerId).toBe('function'));

  it('sets value', () => expect(() => setControllerId(createMockObjectInstance(), 17)).not.toThrow());
});
