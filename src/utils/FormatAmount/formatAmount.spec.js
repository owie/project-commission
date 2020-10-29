import formatAmount from './formatAmount.js'

describe("FormatAmount", () => {
    it("should round up the value with two decimal places", () => {
        expect(formatAmount(.0234, 2)).toEqual('0.03');
    });

    it("should display two decimal places for raw value", () => {
        expect(formatAmount(.3, 2)).toEqual('0.30');
    });
});