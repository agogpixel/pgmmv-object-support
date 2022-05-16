import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getVerticalMovement } from './get-vertical-movement.function';

describe('getVerticalMovement', () => {
  it('is a function', () => expect(typeof getVerticalMovement).toBe('function'));

  it('gets value', () => expect(getVerticalMovement(createMockObjectInstance())).toEqual(-1));
});
