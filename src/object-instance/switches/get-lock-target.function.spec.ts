import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getLockTarget } from './get-lock-target.function';

describe('getLockTarget', () => {
  it('is a function', () => expect(typeof getLockTarget).toBe('function'));

  it('gets value', () => expect(getLockTarget(createMockObjectInstance())).toEqual(false));
});
