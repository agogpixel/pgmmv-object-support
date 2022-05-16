import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getVerticalMaxMovement } from './get-vertical-max-movement.function';

describe('getVerticalMaxMovement', () => {
  it('is a function', () => expect(typeof getVerticalMaxMovement).toBe('function'));

  it('gets value', () => expect(getVerticalMaxMovement(createMockObjectInstance())).toEqual(-1));
});
