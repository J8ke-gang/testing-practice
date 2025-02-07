const reverseString = require("../project.test/reverse.string");


test("Reverses a string correctly", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Works with an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Handles single character strings", () => {
  expect(reverseString("a")).toBe("a");
});

test("Works with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
