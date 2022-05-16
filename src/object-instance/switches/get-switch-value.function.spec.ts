import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getSwitchValue } from './get-switch-value.function';

describe('getSwitchValue', () => {
  it('is a function', () => expect(typeof getSwitchValue).toBe('function'));

  it('returns a resolved value (name)', () =>
    expect(getSwitchValue(createMockObjectInstance(), 'InvincibleId')).toEqual(false));

  it('returns a resolved value (id)', () => expect(getSwitchValue(createMockObjectInstance(), 1)).toEqual(false));

  it('returns undefined when name not resolved', () =>
    expect(getSwitchValue(createMockObjectInstance(), 'fail')).toEqual(undefined));
});
