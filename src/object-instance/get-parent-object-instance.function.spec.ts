import { createMockObjectInstance } from '../../test/mocks/create-mock-object-instance.function';

import { getParentObjectInstance } from './get-parent-object-instance.function';

describe('getParentObjectInstance', () => {
  it('is a function', () => expect(typeof getParentObjectInstance).toBe('function'));

  it('handles child object instance with valid parent', () => {
    const child = createMockObjectInstance();
    child.variables.get(Agtk.constants.objects.variables.ParentObjectInstanceIDId).setValue(17);
    const parent = getParentObjectInstance(child);
    expect(parent).toBeTruthy();
    expect(typeof parent).toEqual('object');
  });

  it('handles child object ID with no parent set', () => expect(getParentObjectInstance(100)).toBeUndefined());
});
