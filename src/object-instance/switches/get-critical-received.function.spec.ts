import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getCriticalReceived } from './get-critical-received.function';

describe('getCriticalReceived', () => {
  it('is a function', () => expect(typeof getCriticalReceived).toBe('function'));

  it('gets value', () => expect(getCriticalReceived(createMockObjectInstance())).toEqual(false));
});
