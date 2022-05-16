import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getSlipOnSlope } from './get-slip-on-slope.function';

describe('getSlipOnSlope', () => {
  it('is a function', () => expect(typeof getSlipOnSlope).toBe('function'));

  it('gets value', () => expect(getSlipOnSlope(createMockObjectInstance())).toEqual(false));
});
