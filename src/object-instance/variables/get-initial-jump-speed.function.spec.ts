import { createMockObjectInstance } from '../../../test/mocks/create-mock-object-instance.function';

import { getInitialJumpSpeed } from './get-initial-jump-speed.function';

describe('getInitialJumpSpeed', () => {
  it('is a function', () => expect(typeof getInitialJumpSpeed).toBe('function'));

  it('gets value', () => expect(getInitialJumpSpeed(createMockObjectInstance())).toEqual(-1));
});
