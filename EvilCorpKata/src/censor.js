module.exports = (word, text) => {
  return text.replace(word, howManySymbolsToPut(word));
};

function howManySymbolsToPut(word) {
  return new Array(word.length + 1).join("X");
}