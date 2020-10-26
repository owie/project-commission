import groupBy from './groupBy.js'
import groups from '../../mockData/groups.json'

describe("GroupBy", () => {
    it("should group according to specified key", () => {
        expect(groupBy(groups.data, 'type')).toEqual(groups.expected);
    });
});