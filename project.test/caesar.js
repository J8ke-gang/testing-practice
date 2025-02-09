export function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

function shiftChar(char, shift) {
  if (char.match(/[a-z]/)) {
    return shiftLetter(char, shift, "a", "z");
  } else if (char.match(/[A-Z]/)) {
    return shiftLetter(char, shift, "A", "Z");
  }
  return char;
}
function shiftLetter(char, shift, start, end) {
  const startCode = start.charCodeAt(0);
  const endCode = end.charCodeAt(0);
  const newCharCode =
    ((((char.charCodeAt(0) - startCode + shift) % 26) + 26) % 26) + startCode;
  return String.fromCharCode(newCharCode);
}
