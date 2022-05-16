import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setXDirectionSpeed } from './set-x-direction-speed.function';

describe('setXDirectionSpeed', () => {
  it('is a function', () => expect(typeof setXDirectionSpeed).toBe('function'));

  it('sets value', () => expect(() => setXDirectionSpeed(createMockObjectInstance(), 17)).not.toThrow());
});
