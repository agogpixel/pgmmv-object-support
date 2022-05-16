import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getDisplayDirection } from './get-display-direction.function';

describe('getDisplayDirection', () => {
  it('is a function', () => expect(typeof getDisplayDirection).toBe('function'));

  it('gets value', () => expect(getDisplayDirection(createMockObjectInstance())).toEqual(-1));
});
