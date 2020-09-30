module.exports = function dateFilter(value) {
  const dateObject = new Date(value);
  const month = parseInt(dateObject.getMonth()) + 1;
  return `${dateObject.getDay()}.${month}.${dateObject.getFullYear()}`;
};
