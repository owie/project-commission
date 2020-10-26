const formatAmount = (amount) => {
    const precision = Math.pow(10, 2);
    const rounded = Math.ceil(amount * precision) / precision;
    return rounded.toFixed(2);
};
export default formatAmount;
