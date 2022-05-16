import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setSlipOnSlope } from './set-slip-on-slope.function';

describe('setSlipOnSlope', () => {
  it('is a function', () => expect(typeof setSlipOnSlope).toBe('function'));

  it('sets value', () => expect(() => setSlipOnSlope(createMockObjectInstance(), true)).not.toThrow());
});
