import getCashoutJuridical from '../GetCashoutJuridical';
import getCashoutNatural from '../GetCashoutNatural';

const getCashout = ({ cashOutJuridical, cashOutNatural }, data) => {
  const { operation, user_type } = data;

  if (user_type === 'natural') {
    return getCashoutNatural(cashOutNatural, data);
  }
  return getCashoutJuridical(cashOutJuridical, operation);
};

export default getCashout;
