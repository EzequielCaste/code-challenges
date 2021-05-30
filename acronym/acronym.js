const parse = (str) => {
  let aux = str;

  if (str.includes('-')) {
    aux = str.replace('-', ' ');
  }
  if (str.includes('_')) {
    aux = str.replace('_', ' ');
  }
  const arr = aux.split(' ');

  let result = '';

  if (arr.length < 2) {
    return str[0];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == undefined) {
      continue;
    }
    result = result + arr[i][0].toUpperCase();
  }

  return result;
};

module.exports = parse;
