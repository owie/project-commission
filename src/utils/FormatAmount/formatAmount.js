const formatAmount = (amount, decimal = 2) => {
    const precision = Math.pow(10, decimal);
    const rounded = Math.ceil(amount * precision) / precision;
    return rounded.toFixed(2);
};
export default formatAmount;
