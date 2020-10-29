import formatAmount from '../FormatAmount';
import getCashIn from '../GetCashIn';
import getCashOut from '../GetCashOut';

const getCommission = (items, config) => items.map((data) => {
  const { type } = data;

  let commission = 0;

  if (type === 'cash_in') {
    commission = getCashIn(config, data);
  } else {
    commission = getCashOut(config, data);
  }

  return formatAmount(commission);
});

export default getCommission;
