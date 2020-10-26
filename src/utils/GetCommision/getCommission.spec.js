import getCommission from './getCommission.js'
import jsonData from '../../mockData/input.json'

describe("GetCommission", () => {
    let  config = {};

    beforeEach(() => {
        config = {
            "cashIn": {
                "percents": 0.03,
                "max": {
                    "amount": 5,
                    "currency": "EUR"
                }
            },
            "cashOutLegal": {
                "percents": 0.3,
                "min": {
                    "amount": 0.5,
                    "currency": "EUR"
                }
            },
            "cashOutNatural": {
                "percents": 0.3,
                "week_limit": {
                    "amount": 1000,
                    "currency": "EUR"
                }
            }
        }
    });

    it("should return raw commission", () => {
        const expected = [
            '0.06', 
            '0.90', 
            '87.00', 
            '3.00', 
            '0.30', 
            '0.30', 
            '5.00', 
            '0.00', 
            '0.00'
        ] 
        expect(getCommission(jsonData, config)).toEqual(expected);
    });
});