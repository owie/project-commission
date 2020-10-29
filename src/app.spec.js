import axios from 'axios';
import App from './app';
import fetchData, { cashIn, cashOutJuridical, cashOutNatural } from './api';

jest.mock('axios');

describe('App', () => {
  const config = {
    cashIn: {
      percents: 0.03,
      max: {
        amount: 5,
        currency: 'EUR',
      },
    },
    cashOutJuridical: {
      percents: 0.3,
      min: {
        amount: 0.5,
        currency: 'EUR',
      },
    },
    cashOutNatural: {
      percents: 0.03,
      week_limit: {
        amount: 1000,
        currency: 'EUR',
      },
    },
  };

  afterEach(() => jest.resetAllMocks());

  it('should initialize', () => {
    App.prototype.init = jest.fn();
    const app = new App();
    app.init();

    expect(app.init).toHaveBeenCalled();
  });

  it('should fetch config', async () => {
    await axios.all.mockImplementationOnce(() => Promise.resolve(config));
    expect(axios.all(
      [
        fetchData(cashIn),
        fetchData(cashOutJuridical),
        fetchData(cashOutNatural),
      ],
    )).resolves.toBe(config);
  });
});
