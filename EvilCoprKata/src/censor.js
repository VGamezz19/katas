module.exports = (word, text) => {

  return text.replace(word, howManySymbolsToPut(word));
};

function howManySymbolsToPut(word) {
  const length = word.length;
  const symbol = "X";

  let howMany = "";

  for (let i = 0; i < length; i++) {
    howMany += "X";
  }
  
  return howMany;
}