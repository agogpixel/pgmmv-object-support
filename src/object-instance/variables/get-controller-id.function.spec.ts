import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getControllerId } from './get-controller-id.function';

describe('getControllerId', () => {
  it('is a function', () => expect(typeof getControllerId).toBe('function'));

  it('gets value', () => expect(getControllerId(createMockObjectInstance())).toEqual(-1));
});
