import getCashout from './getCashout.js';
import * as formatAmount from '../FormatAmount';
import * as computeCommission from '../ComputeCommission';
import jsonData from '../../mockData/input.json'

describe("GetCashOut", () => {
    let config = {};
    const formatAmountSpy = jest.spyOn(formatAmount, 'default');
    const computeCommissionSpy = jest.spyOn(computeCommission, 'default');

    beforeEach(() => {
        config = {
            "cashOutLegal": {
                "percents": 0.3,
                "min": {
                    "amount": 0.5,
                    "currency": "EUR"
                }
            },
            "cashOutNatural": {
                "percents": 0.03,
                "week_limit": {
                    "amount": 1000,
                    "currency": "EUR"
                }
            }
        }
    });

    describe("User Juridical", () => {
        const dataLegal = {
            "date": "2016-01-06",
            "user_id": 2,
            "user_type": "juridical",
            "type": "cash_out",
            "operation": {
                "amount": 300.00,
                "currency": "EUR"
            }
        }

        it("should get raw commission", () => {
            expect(getCashout(config, dataLegal, jsonData)).toEqual('0.90');
            expect(computeCommissionSpy).toHaveBeenCalledWith(300, 0.3);
            expect(formatAmountSpy).toHaveBeenCalledWith(0.90);
            
        });
    })

    describe("User Natural", () => {
        const dataNatural = {
            "date": "2016-01-06",
            "user_id": 2,
            "user_type": "natural",
            "type": "cash_out",
            "operation": {
                "amount": 300.00,
                "currency": "EUR"
            }
        }

        it("should get raw commission", () => {
            expect(computeCommissionSpy).toHaveBeenCalledWith(300, 0.3);
            expect(formatAmountSpy).toHaveBeenCalledWith(0.9);
            expect(getCashout(config, dataNatural, jsonData)).toEqual('0.00');
        });
    })
});