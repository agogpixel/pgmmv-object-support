import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getDurationTakeOverAcceleratedSpeed } from './get-duration-take-over-accelerated-speed.function';

describe('getDurationTakeOverAcceleratedSpeed', () => {
  it('is a function', () => expect(typeof getDurationTakeOverAcceleratedSpeed).toBe('function'));

  it('gets value', () => expect(getDurationTakeOverAcceleratedSpeed(createMockObjectInstance())).toEqual(-1));
});
