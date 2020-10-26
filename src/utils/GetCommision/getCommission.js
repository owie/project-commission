/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import getCashIn from '../GetCashIn';
import getCashOut from '../GetCashOut';

const getCommission = (items, config) => items.map((data) => {
  const { type } = data;

  if (type === 'cash_in') {
    console.log(getCashIn(config, data));
    return getCashIn(config, data);
  } else {
    console.log(getCashOut(config, data, items));
    return getCashOut(config, data, items);
  }

  return data;
})

export default getCommission;
