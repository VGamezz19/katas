module.exports = (word, text) => {
  try {

    validate({ word, text })
  } catch (err) {

    console.error(err)
  }

  return text.replace(word, howManySymbolsToPut(word));
};

function validate(obj) {
  if (!obj instanceof Object) throw new Error("Invalid entry from validate(obj: Object)")

  for (el in obj)
    if (!obj[el]) throw new Error("Mandatory prop " + el)

}

function howManySymbolsToPut(word) {
  return new Array(word.length + 1).join("X");
}