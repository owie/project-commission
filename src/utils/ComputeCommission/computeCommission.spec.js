import computeCommission from './computeCommission.js';

describe("ComputeCommission", () => {
    it("should get actual commission", () => {
        expect(computeCommission(300, .3)).toEqual(0.9);
    });
});