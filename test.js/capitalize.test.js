import capitalize from "../project.test/capitalize"; //import from project.test

test("capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes the first letter of a sentence", () => {
  expect(capitalize("javaScript is fun!")).toBe("JavaScript is fun!");
});

test("handles an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("keeps the rest of the string unchanged", () => {
  expect(capitalize("tEST")).toBe("TEST"); // Only the first letter should change
});

test("does not change an already capitalized word", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
