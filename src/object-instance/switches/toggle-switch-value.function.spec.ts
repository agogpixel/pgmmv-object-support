import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { toggleSwitchValue } from './toggle-switch-value.function';

describe('toggleSwitchValue', () => {
  it('is a function', () => expect(typeof toggleSwitchValue).toBe('function'));

  it('toggles a value using valid switch name', () => {
    const objectInstance = createMockObjectInstance();
    toggleSwitchValue(objectInstance, 'InvincibleId');
    expect(objectInstance.switches.get(Agtk.constants.objects.switches.InvincibleId).getValue()).toEqual(true);
    toggleSwitchValue(objectInstance, 'InvincibleId');
    expect(objectInstance.switches.get(Agtk.constants.objects.switches.InvincibleId).getValue()).toEqual(false);
  });

  it('silently fails when toggle is with invalid switch name', () =>
    expect(() => toggleSwitchValue(createMockObjectInstance(), 'fail')).not.toThrow());
});
