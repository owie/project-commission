/* eslint-disable camelcase */
import getDateWeekRange from './getDateWeekRange';
import groupBy from './groupBy';

const getWeeklyCashout = (id, transactionDate, items) => {
  const user = groupBy(items, 'user_id')[id]
    .filter((group) => {
      const { type } = group;
      return type === 'cash_out';
    });

  const weekRange = getDateWeekRange(transactionDate);
  return user.map((data) => {
    const { user_id, date, operation } = data;
    const { amount } = operation;

    return user_id === id && weekRange.includes(date)
      ? amount
      : 0;
  }).reduce((a, b) => a + b);
}

export default getWeeklyCashout;
