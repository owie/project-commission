import getWeeklyCashout from './getWeeklyCashout';

describe('GetWeeklyCashout', () => {
  it('should get weekly cashout', () => {
    expect(getWeeklyCashout(1, '2016-01-06', 200)).toBe(0);
  });

  it('should get weekly cashout', () => {
    const data = [
      {
        user_id: 1,
        date: '2016-01-06',
        amount: 200,
      },
      {
        user_id: 1,
        date: '2016-01-07',
        amount: 200,
      },
    ];
    const expected = [200, 400];

    data.forEach((d, index) => {
      expect(getWeeklyCashout(d.user_id, d.date, d.amount)).toBe(expected[index]);
    });
  });
});
