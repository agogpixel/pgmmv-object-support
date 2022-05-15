import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setCriticalReceived } from './set-critical-received.function';

describe('setCriticalReceived', () => {
  it('is a function', () => expect(typeof setCriticalReceived).toBe('function'));

  it('sets value', () => expect(() => setCriticalReceived(createMockObjectInstance(), true)).not.toThrow());
});
