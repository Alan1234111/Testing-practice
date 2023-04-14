function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text) {
  return text.split("").reverse().join("");
}

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
};

function caesarCipher(text, key) {
  let s = "";
  let dictionary = [
    "a",
    "b",
    "c",
    "d",
    "e",
    " f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let pos = key;

  for (let i = 0; text.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (text[i] === " ") {
        s += "";
        break;
      }
      if (text[i] === dictionary[j]) {
        if (j + key > dictionary.length - 1) {
          s += dictionary[j + key - dictionary.length];
          break;
        }
      }
    }
  }

  return s;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
