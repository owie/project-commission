import getDateWeekRange from './getDateWeekRange.js'

describe('GetDateWeekRange', () => {
    it('should get the week range from Monday to Sunday', () => {
        const expetedResult = [
            '2020-10-26', 
            '2020-10-27', 
            '2020-10-28', 
            '2020-10-29', 
            '2020-10-30', 
            '2020-10-31', 
            '2020-11-01'
        ];
        expect(getDateWeekRange('2020-10-26')).toEqual(expetedResult);
    });

    it('should get previous week range if transaction date falls on Sunday', () => {
        const expetedResult = [
            '2020-10-19', 
            '2020-10-20', 
            '2020-10-21', 
            '2020-10-22', 
            '2020-10-23', 
            '2020-10-24', 
            '2020-10-25'
        ];
        expect(getDateWeekRange('2020-10-25')).toEqual(expetedResult);
    });
});