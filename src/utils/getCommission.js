/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import getCashIn from './getCashIn';
import getCashOut from './getCashOut';

const getCommission = (items, config) => items.map((data) => {
  const { type } = data;

  if (type === 'cash_in') {
    console.log(getCashIn(config, data));
  } else {
    console.log(getCashOut(config, data, items));
  }

  return data;
})

export default getCommission;
