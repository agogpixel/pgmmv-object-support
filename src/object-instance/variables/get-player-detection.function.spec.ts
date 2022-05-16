import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getPlayerDetection } from './get-player-detection.function';

describe('getPlayerDetection', () => {
  it('is a function', () => expect(typeof getPlayerDetection).toBe('function'));

  it('gets value', () => expect(getPlayerDetection(createMockObjectInstance())).toEqual(-1));
});
