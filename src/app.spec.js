import axios from 'axios';
import App from './app';
import fetchData, { cashIn, cashOutLegal, cashOutNatural } from './api';

jest.mock('axios');

describe("App", () => {
    const app = new App();
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
    };

    afterEach(() => jest.resetAllMocks());

    it("should have empty config", () => {
        expect(app.config).toEqual({});
    });

    it("should initialize", () => {
        const init = App.prototype.init = jest.fn();
        const app = new App();
        app.init();

        expect(init).toHaveBeenCalled();
    });

    it('should fetch config', async () => {
        await axios.all.mockImplementationOnce(() => {
            app.config = config;
            return Promise.resolve(config);
        })
        expect(axios.all([fetchData(cashIn), fetchData(cashOutLegal), fetchData(cashOutNatural)])).resolves.toBe(config);
        expect(app.config).toEqual(config);
    });
});