import analyzeArray from "../project.test/analyze.array"; // import analyze from project.test

// handles normal array
test("Analyzes normal array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
// handles sing element array
test("Handles a single element array", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});
// handles a larger number set
test("Handles a large number set", () => {
  expect(analyzeArray([10, 20, 30, 40, 50])).toEqual({
    average: 30,
    min: 10,
    max: 50,
    length: 5,
  });
});
//throws an error if the array is empty
test("Throws an error for an empty array", () => {
  expect(() => analyzeArray([])).toThrow(
    "Input must be a non-empty array of numbers"
  );
});
// error if invalid
test("Throws an error for non-array input", () => {
  expect(() => analyzeArray("not an array")).toThrow(
    "Input must be a non-empty array of numbers"
  );
});
