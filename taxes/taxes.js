const taxes = (amount, tax) => {
  return [amount * (1 + tax / 100)];
};

module.exports = taxes;
