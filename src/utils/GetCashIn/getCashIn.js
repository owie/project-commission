import formatAmount from '../FormatAmount';
import computeCommission from '../ComputeCommission';

const getCashIn = ({ cashIn }, { operation }) => {
  const { percents, max } = cashIn;
  const { amount } = operation;

  let commission = computeCommission(amount, percents);
  commission = commission > max.amount ? max.amount : commission;
  return formatAmount(commission);
}

export default getCashIn;
