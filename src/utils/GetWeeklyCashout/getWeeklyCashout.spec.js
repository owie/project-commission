import getWeeklyCashout from './getWeeklyCashout.js'
import * as groupBy from '../GroupBy'
import jsonData from '../../mockData/input.json'

describe("GetWeeklyCashout", () => {
    it("should get weekly cashout", () => {
        const groupBySpy = jest.spyOn(groupBy, 'default');
        expect(getWeeklyCashout(1, '2016-01-10', jsonData)).toEqual(31200);
        expect(groupBySpy).toHaveBeenCalled();
    });
});