import getCashoutNatural from '.';

describe('User Natural', () => {
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

  it('should get raw commission', () => {
    expect(getCashoutNatural(config.cashOutNatural, data)).toEqual(0.00);
  });
});
