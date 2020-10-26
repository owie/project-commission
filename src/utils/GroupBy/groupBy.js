const groupBy = (items, key) => items.reduce((item, value) => {
  const newItem = item;
  newItem[value[key]] = newItem[value[key]] || [];
  newItem[value[key]].push(value);
  return newItem;
}, {});
export default groupBy;
