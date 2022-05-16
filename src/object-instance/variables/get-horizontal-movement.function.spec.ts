import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getHorizontalMovement } from './get-horizontal-movement.function';

describe('getHorizontalMovement', () => {
  it('is a function', () => expect(typeof getHorizontalMovement).toBe('function'));

  it('gets value', () => expect(getHorizontalMovement(createMockObjectInstance())).toEqual(-1));
});
