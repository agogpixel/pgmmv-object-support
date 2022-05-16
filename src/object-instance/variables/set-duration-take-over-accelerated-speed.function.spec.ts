import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setDurationTakeOverAcceleratedSpeed } from './set-duration-take-over-accelerated-speed.function';

describe('setDurationTakeOverAcceleratedSpeed', () => {
  it('is a function', () => expect(typeof setDurationTakeOverAcceleratedSpeed).toBe('function'));

  it('sets value', () =>
    expect(() => setDurationTakeOverAcceleratedSpeed(createMockObjectInstance(), 17)).not.toThrow());
});
