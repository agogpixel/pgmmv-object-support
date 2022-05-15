import { createMockObjectInstance } from '../../test/mocks/create-mock-object-instance.function';

import { ObjectInstanceAccessorType } from './object-instance-accessor-type.enum';
import { resolveId } from './resolve-id.function';

describe('resolveId', () => {
  it('is a function', () => expect(typeof resolveId).toBe('function'));

  it('returns the same ID if number (switches)', () =>
    expect(resolveId(createMockObjectInstance(), ObjectInstanceAccessorType.Switches, 1)).toEqual(1));

  it('returns the same ID if number (variables)', () =>
    expect(resolveId(createMockObjectInstance(), ObjectInstanceAccessorType.Variables, 1)).toEqual(1));

  it('returns the resolved ID if name found (switches)', () =>
    expect(resolveId(createMockObjectInstance(), ObjectInstanceAccessorType.Switches, 'InvincibleId')).toEqual(
      Agtk.constants.objects.switches.InvincibleId
    ));

  it('returns the resolved ID if name found (variables)', () =>
    expect(resolveId(createMockObjectInstance(), ObjectInstanceAccessorType.Variables, 'HPId')).toEqual(
      Agtk.constants.objects.variables.HPId
    ));
});
