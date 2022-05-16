import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setAreaDetection } from './set-area-detection.function';

describe('setAreaDetection', () => {
  it('is a function', () => expect(typeof setAreaDetection).toBe('function'));

  it('sets value', () => expect(() => setAreaDetection(createMockObjectInstance(), 17)).not.toThrow());
});
