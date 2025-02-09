import { caesarCipher } from "../project.test/caesar";

test("shifts letters correctly", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("handles non-alphabetic characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles large shift factors", () => {
  expect(caesarCipher("abc", 26)).toBe("abc");
  expect(caesarCipher("xyz", 52)).toBe("xyz");
});

test("handles negative shifts", () => {
  expect(caesarCipher("bcd", -1)).toBe("abc");
  expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
});
export default caesarCipher;
