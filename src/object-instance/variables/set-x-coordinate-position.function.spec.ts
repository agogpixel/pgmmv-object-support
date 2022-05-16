import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setXCoordinatePosition } from './set-x-coordinate-position.function';

describe('setXCoordinatePosition', () => {
  it('is a function', () => expect(typeof setXCoordinatePosition).toBe('function'));

  it('sets value', () => expect(() => setXCoordinatePosition(createMockObjectInstance(), 17)).not.toThrow());
});
