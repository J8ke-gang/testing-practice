const reverseString = require("../project.test/reverse.string");
//reverses string
test("Reverses a string correctly", () => {
  expect(reverseString("hello")).toBe("olleh");
});
// handles a empty string
test("Works with an empty string", () => {
  expect(reverseString("")).toBe("");
});
//handles a single character string
test("Handles single character strings", () => {
  expect(reverseString("a")).toBe("a");
});
//will work with spaces
test("Works with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
