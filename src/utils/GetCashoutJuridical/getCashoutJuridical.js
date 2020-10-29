import computeCommission from '../ComputeCommission';

const getCashoutJuridical = ({ percents }, operation) => {
  const { amount } = operation;
  return computeCommission(amount, percents);
};

export default getCashoutJuridical;
