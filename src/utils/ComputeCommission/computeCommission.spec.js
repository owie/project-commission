import computeCommission from './computeCommission';

describe('ComputeCommission', () => {
  it('should get actual commission', () => {
    expect(computeCommission(300, 0.3)).toEqual(0.9);
  });
});
