const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const decodedValue = (arr) => {
  const [first, second] = arr;
  return parseInt(`${COLORS.indexOf(first)}${COLORS.indexOf(second)}`);
};

module.exports = decodedValue;
