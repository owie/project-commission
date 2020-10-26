const getDateWeekRange = (transactionDate) => {
  const date = new Date(transactionDate);
  const getMonday = date.getDate() - date.getDay() + 1;
  const firstday = new Date(date.setDate(getMonday));
  const firstDateString = new Date(firstday.getTime() - (firstday.getTimezoneOffset() * 60000))
    .toISOString().slice(0, 10);

  //  Monday - Sunday
  const week = [1, 2, 3, 4, 5, 6, 7].reduce((item, value, index) => {
    let days = getMonday + index; // use index 0-6
    // get previous week if transaction date not in week range of 1-7
    if (transactionDate < firstDateString) {
      days = getMonday - value;
    };

    const day = new Date(date.setDate(days)).toISOString().slice(0, 10);
    item.push(day);

    return item;
  }, [])

  return transactionDate < firstDateString ? week.reverse() : week;
}

export default getDateWeekRange;
