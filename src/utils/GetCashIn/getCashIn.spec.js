import getCashIn from './getCashIn';
import * as computeCommission from '../ComputeCommission';

describe('GetCashIn', () => {
  let data = {};
  let config = {};
  const computeCommissionSpy = jest.spyOn(computeCommission, 'default');

  beforeEach(() => {
    data = {
      date: '2016-01-05',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_in',
      operation: {
        amount: 200.00,
        currency: 'EUR',
      },
    };

    config = {
      cashIn: {
        percents: 0.03,
        max: {
          amount: 5,
          currency: 'EUR',
        },
      },
    };
  });

  it('should get raw commission', () => {
    expect(getCashIn(config, data)).toEqual(0.06);
    expect(computeCommissionSpy).toHaveBeenCalledWith(200, 0.03);
  });
});
