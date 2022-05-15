import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getPortalTouched } from './get-portal-touched.function';

describe('getPortalTouched', () => {
  it('is a function', () => expect(typeof getPortalTouched).toBe('function'));

  it('gets value', () => expect(getPortalTouched(createMockObjectInstance())).toEqual(false));
});
