import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setYDirectionSpeed } from './set-y-direction-speed.function';

describe('setYDirectionSpeed', () => {
  it('is a function', () => expect(typeof setYDirectionSpeed).toBe('function'));

  it('sets value', () => expect(() => setYDirectionSpeed(createMockObjectInstance(), 17)).not.toThrow());
});
