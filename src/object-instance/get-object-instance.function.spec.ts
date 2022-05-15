import { getObjectInstance } from './get-object-instance.function';

describe('getObjectInstance', () => {
  it('is a function', () => expect(typeof getObjectInstance).toBe('function'));

  it('returns an object instance', () => {
    const objectInstance = getObjectInstance(17);
    expect(objectInstance).toBeTruthy();
    expect(typeof objectInstance).toEqual('object');
  });
});
