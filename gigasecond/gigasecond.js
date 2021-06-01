const gigasecond = (date) => {
  let startTime = date.getTime();
  let endTime = startTime + 1000000000000;
  return new Date(endTime);
};

module.exports = gigasecond;
