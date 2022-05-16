import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setVariableValue } from './set-variable-value.function';

describe('setVariableValue', () => {
  it('is a function', () => expect(typeof setVariableValue).toBe('function'));

  it('sets a value using valid variable name', () => {
    const objectInstance = createMockObjectInstance();
    setVariableValue(objectInstance, 'HPId', 100);
    expect(objectInstance.variables.get(Agtk.constants.objects.variables.HPId).getValue()).toEqual(100);
  });

  it('silently fails when value is set with invalid variable name', () =>
    expect(() => setVariableValue(createMockObjectInstance(), 'fail', 17)).not.toThrow());
});
