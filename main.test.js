const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require("./main");

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

describe("Caesar Cipher", () => {
  test("Letter a", () => {
    expect(caesarCipher("a", 1)).toBe("b");
  });
  test("Letter b", () => {
    expect(caesarCipher("b", 1)).toBe("c");
  });
  test("Letter c", () => {
    expect(caesarCipher("c", 1)).toBe("d");
  });
  test("Letter d", () => {
    expect(caesarCipher("d", 1)).toBe("e");
  });
  test("Letter e", () => {
    expect(caesarCipher("e", 1)).toBe("f");
  });
  test("Letter f", () => {
    expect(caesarCipher("f", 1)).toBe("g");
  });
  test("Letter g", () => {
    expect(caesarCipher("g", 1)).toBe("h");
  });
});

describe("Analize array", () => {
  test("check values", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
