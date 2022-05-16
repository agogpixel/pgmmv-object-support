import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setYCoordinatePosition } from './set-y-coordinate-position.function';

describe('setYCoordinatePosition', () => {
  it('is a function', () => expect(typeof setYCoordinatePosition).toBe('function'));

  it('sets value', () => expect(() => setYCoordinatePosition(createMockObjectInstance(), 17)).not.toThrow());
});
