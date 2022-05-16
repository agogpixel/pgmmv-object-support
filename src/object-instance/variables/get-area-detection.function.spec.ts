import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getAreaDetection } from './get-area-detection.function';

describe('getAreaDetection', () => {
  it('is a function', () => expect(typeof getAreaDetection).toBe('function'));

  it('gets value', () => expect(getAreaDetection(createMockObjectInstance())).toEqual(-1));
});
