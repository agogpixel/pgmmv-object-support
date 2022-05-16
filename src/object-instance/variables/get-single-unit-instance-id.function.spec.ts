import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getSingleUnitInstanceId } from './get-single-unit-instance-id.function';

describe('getSingleUnitInstanceId', () => {
  it('is a function', () => expect(typeof getSingleUnitInstanceId).toBe('function'));

  it('gets value', () => expect(getSingleUnitInstanceId(createMockObjectInstance())).toEqual(-1));
});
