import getWeeklyCashout from '../GetWeeklyCashout';
import computeCommission from '../ComputeCommission';

const getCashoutNatural = ({ week_limit, percents }, data) => {
  const { operation, date, user_id } = data;
  const { amount } = operation;

  let newAmount = 0;    
  const weeklyCashout = getWeeklyCashout(user_id, date, amount);

  const cashOutLimit = week_limit.amount;
  const totalWeeklyCashOut = weeklyCashout + amount;

  if(totalWeeklyCashOut > cashOutLimit) {
    newAmount = totalWeeklyCashOut - cashOutLimit;

    if(newAmount > amount) {
      newAmount = amount;
    }
  }

  return computeCommission(newAmount, percents);
}

export default getCashoutNatural;
