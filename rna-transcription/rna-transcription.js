const toRna = (str) => {
  let arr = str.split('');
  let result = '';

  arr.map((letter) => {
    switch (letter) {
      case '':
        break;
      case 'G':
        result = result + 'C';
        break;
      case 'C':
        result = result + 'G';
        break;
      case 'T':
        result = result + 'A';
        break;
      case 'A':
        result = result + 'U';
        break;
      default:
        break;
    }
  });
  return result;
};

module.exports = toRna;
