import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setPortalTouched } from './set-portal-touched.function';

describe('setPortalTouched', () => {
  it('is a function', () => expect(typeof setPortalTouched).toBe('function'));

  it('sets value', () => expect(() => setPortalTouched(createMockObjectInstance(), true)).not.toThrow());
});
