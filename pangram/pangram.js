const isPangram = (str) => {
  let panArr = str.toLowerCase();
  panArr = panArr.match(/[a-z]/gi);

  const panSet = new Set(panArr);

  return panSet.size === 26;
};

module.exports = isPangram;
