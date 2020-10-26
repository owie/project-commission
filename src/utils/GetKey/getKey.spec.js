import getKey from './getKey.js'

describe("GetKey", () => {
    it("should return key", () => {
        expect(getKey('enabled')).toEqual('enabled');
    });
});