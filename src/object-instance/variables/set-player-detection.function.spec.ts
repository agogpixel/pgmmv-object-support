import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { setPlayerDetection } from './set-player-detection.function';

describe('setPlayerDetection', () => {
  it('is a function', () => expect(typeof setPlayerDetection).toBe('function'));

  it('sets value', () => expect(() => setPlayerDetection(createMockObjectInstance(), 17)).not.toThrow());
});
