import calculator from "../project.test/calculator";

// Add
test("adds two numbers", () => {
  expect(calculator.add(5, 3)).toBe(8);
});
// Subtract
test("subtract two numbers", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});
// Multiply
test("multiply two numbers", () => {
  expect(calculator.multiply(7, 2)).toBe(14);
});
// Divide
test("divides two numbers", () => {
  expect(calculator.divide(20, 4)).toBe(5);
});
// Throw error when dividing by 0
test("throw an error when dividing by zero", () => {
  expect(() => calculator.divide(10, 0)).toThrow("cannot divide by zero");
});
