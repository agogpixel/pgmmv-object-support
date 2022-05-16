import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getVariableValue } from './get-variable-value.function';

describe('getVariableValue', () => {
  it('is a function', () => expect(typeof getVariableValue).toBe('function'));

  it('returns a resolved value (name)', () => expect(getVariableValue(createMockObjectInstance(), 'HPId')).toEqual(-1));

  it('returns a resolved value (id)', () => expect(getVariableValue(createMockObjectInstance(), 2)).toEqual(-1));

  it('returns undefined when name not resolved', () =>
    expect(getVariableValue(createMockObjectInstance(), 'fail')).toEqual(undefined));
});
