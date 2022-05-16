import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getHorizontalMaxMovement } from './get-horizontal-max-movement.function';

describe('getHorizontalMaxMovement', () => {
  it('is a function', () => expect(typeof getHorizontalMaxMovement).toBe('function'));

  it('gets value', () => expect(getHorizontalMaxMovement(createMockObjectInstance())).toEqual(-1));
});
