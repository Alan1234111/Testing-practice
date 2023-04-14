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

function caesarCipher(str, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  let string = str.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      let index = alphabet.indexOf(string[i]);
      result += alphabet[(index + key) % 26];
    } else {
      result += " ";
    }
  }

  return result;
}

function analyzeArray([...arr]) {
  const obj = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  const sum = arr.reduce((cur, prev) => {
    return cur + prev;
  }, 0);

  obj.average = sum / arr.length;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;

  return obj;
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
