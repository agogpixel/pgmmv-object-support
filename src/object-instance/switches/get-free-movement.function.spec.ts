import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getFreeMovement } from './get-free-movement.function';

describe('getFreeMovement', () => {
  it('is a function', () => expect(typeof getFreeMovement).toBe('function'));

  it('gets value', () => expect(getFreeMovement(createMockObjectInstance())).toEqual(false));
});
