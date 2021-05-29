const accumulate = (collection, operation) => {
  const newCollection = [];

  for (let i = 0; i < collection.length; i++) {
    newCollection.push(operation(collection[i]));
  }

  return newCollection;
};

module.exports = accumulate;
