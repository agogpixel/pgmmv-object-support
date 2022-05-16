import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setSwitchValue } from './set-switch-value.function';

describe('setSwitchValue', () => {
  it('is a function', () => expect(typeof setSwitchValue).toBe('function'));

  it('sets a value using valid switch name', () => {
    const objectInstance = createMockObjectInstance();
    setSwitchValue(objectInstance, 'InvincibleId', true);
    expect(objectInstance.switches.get(Agtk.constants.objects.switches.InvincibleId).getValue()).toEqual(true);
  });

  it('silently fails when value is set with invalid switch name', () =>
    expect(() => setSwitchValue(createMockObjectInstance(), 'fail', true)).not.toThrow());
});
