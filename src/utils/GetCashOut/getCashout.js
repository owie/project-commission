/* eslint-disable camelcase */
import formatAmount from '../FormatAmount';
import getWeeklyCashout from '../GetWeeklyCashout';
import computeCommission from '../ComputeCommission';

const getCashout = ({ cashOutLegal, cashOutNatural }, data, items) => {
  const { operation, user_type, date, user_id } = data;
  const { amount } = operation;
  const { percents } = cashOutLegal;
  const defaultCommision = computeCommission(amount, percents);

  if (user_type === 'natural') {
    const { week_limit } = cashOutNatural; 

    const weeklyCashout = getWeeklyCashout(user_id, date, items);
    const cashOutLimit = week_limit.amount;

    let commission = 0;

    if (weeklyCashout > cashOutLimit && amount <= cashOutLimit) {
      commission = amount * 0.003;
    } else if (amount > cashOutLimit && weeklyCashout > cashOutLimit) {
      commission = (amount - cashOutLimit) * 0.003;
    }

    return formatAmount(commission);
  }
  return formatAmount(defaultCommision);
}

export default getCashout;
