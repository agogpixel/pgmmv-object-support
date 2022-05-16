import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getDisplayPriority } from './get-display-priority.function';

describe('getDisplayPriority', () => {
  it('is a function', () => expect(typeof getDisplayPriority).toBe('function'));

  it('gets value', () => expect(getDisplayPriority(createMockObjectInstance())).toEqual(-1));
});
