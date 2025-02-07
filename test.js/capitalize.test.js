import capitalize from "../project.test/capitalize"; //import from project.test
//capitalize first letter of word
test("capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});
//capitalize first letter of sentence
test("capitalizes the first letter of a sentence", () => {
  expect(capitalize("javaScript is fun!")).toBe("JavaScript is fun!");
});
// handle a empty string
test("handles an empty string", () => {
  expect(capitalize("")).toBe("");
});
// only first letter should change
test("keeps the rest of the string unchanged", () => {
  expect(capitalize("tEST")).toBe("TEST");
});
//doesn't change already changed capitalized word
test("does not change an already capitalized word", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
