import moment from 'moment';

const user = {};

const getWeeklyCashout = (id, transactionDate, amount) => {
  let userWeeklyCashOutTotal = 0;

  if (!user[id]) user[id] = [];
  const weeklyTransaction = moment(transactionDate, 'YYYY-MM-DD').format('W');
  userWeeklyCashOutTotal = user[id]
    .reduce((acc, val) => (weeklyTransaction === val.weeklyTransaction
      ? acc + val.amount
      : amount), 0);

  user[id] = [
    ...user[id],
    {
      weeklyTransaction,
      amount,
    },
  ];
  return userWeeklyCashOutTotal;
};

export default getWeeklyCashout;
