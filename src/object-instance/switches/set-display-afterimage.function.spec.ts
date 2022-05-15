import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setDisplayAfterimage } from './set-display-afterimage.function';

describe('setDisplayAfterimage', () => {
  it('is a function', () => expect(typeof setDisplayAfterimage).toBe('function'));

  it('sets value', () => expect(() => setDisplayAfterimage(createMockObjectInstance(), true)).not.toThrow());
});
