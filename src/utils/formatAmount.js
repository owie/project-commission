const isRounded = process.argv.includes('rounded');
const formatAmount = (amount) => (isRounded ? Math.ceil(amount).toFixed(2) : amount.toFixed(2));
export default formatAmount;
