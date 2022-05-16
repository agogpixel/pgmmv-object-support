import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getXCoordinatePosition } from './get-x-coordinate-position.function';

describe('getXCoordinatePosition', () => {
  it('is a function', () => expect(typeof getXCoordinatePosition).toBe('function'));

  it('gets value', () => expect(getXCoordinatePosition(createMockObjectInstance())).toEqual(-1));
});
