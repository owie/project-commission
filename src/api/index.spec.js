import axios from 'axios';
import fetchData, { cashIn, cashOutLegal, cashOutNatural } from './index';

jest.mock('axios');

describe("fetchData", () => {
    it("should fetch data", () => {
        const requestObjects = {
            cashIn,
            cashOutLegal,
            cashOutNatural
        };

        const config = {
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
                "percents": 0.03,
                "week_limit": {
                    "amount": 1000,
                    "currency": "EUR"
                }
            }
        }

        Object.values(requestObjects).map(value => {
            axios.get.mockImplementationOnce(() => Promise.resolve(config[value]));
            expect(fetchData(value)).resolves.toBe(config[value]);
            expect(axios.get).toHaveBeenCalledWith(value);
            return fetchData(value);
        });
    });
});