import getCashout from './getCashout';
import * as getCashoutJuridical from '../GetCashoutJuridical';
import * as getCashoutNatural from '../GetCashoutNatural';

describe('GetCashOut', () => {
  const getCashoutJuridicalSpy = jest.spyOn(getCashoutJuridical, 'default');
  const getCashoutNaturalSpy = jest.spyOn(getCashoutNatural, 'default');

  const config = {
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call getCashoutJuridical', () => {
    const data = {
      date: '2016-01-06',
      user_id: 2,
      user_type: 'juridical',
      type: 'cash_out',
      operation: {
        amount: 300.00,
        currency: 'EUR',
      },
    };
    expect(getCashout(config, data)).toEqual(0.90);
    expect(getCashoutJuridicalSpy).toHaveBeenCalledWith(config.cashOutJuridical, data.operation);
    expect(getCashoutNaturalSpy).not.toHaveBeenCalled();
  });

  it('should call getCashoutNatural', () => {
    const data = {
      date: '2016-01-06',
      user_id: 2,
      user_type: 'natural',
      type: 'cash_out',
      operation: {
        amount: 300.00,
        currency: 'EUR',
      },
    };
    expect(getCashout(config, data)).toEqual(0);
    expect(getCashoutNaturalSpy).toHaveBeenCalledWith(config.cashOutNatural, data);
    expect(getCashoutJuridicalSpy).not.toHaveBeenCalled();
  });
});
