import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getDisplayAfterimage } from './get-display-afterimage.function';

describe('getDisplayAfterimage', () => {
  it('is a function', () => expect(typeof getDisplayAfterimage).toBe('function'));

  it('gets value', () => expect(getDisplayAfterimage(createMockObjectInstance())).toEqual(false));
});
