const {
  capitalize,
  reverseString,
  calculator,
  caesar,
  caesarCipher,
} = require("./main");

test("Capitalize first letter", () => {
  expect(capitalize("text")).toBe("Text");
});

test("Reverse string", () => {
  expect(reverseString("text")).toBe("txet");
});

describe("Calculator", () => {
  test("Add numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("Substract numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("Divide numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("Multiply numbers", () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });
});

// test("Reversing number base on key", () => {
//   expect(caesarCipher("boy is moving", 2)).toBe("dqa ku oqxkpi");
// });
