import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getYCoordinatePosition } from './get-y-coordinate-position.function';

describe('getYCoordinatePosition', () => {
  it('is a function', () => expect(typeof getYCoordinatePosition).toBe('function'));

  it('gets value', () => expect(getYCoordinatePosition(createMockObjectInstance())).toEqual(-1));
});
