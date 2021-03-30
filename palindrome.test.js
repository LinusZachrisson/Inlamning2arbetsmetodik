const palindrome = require("./palindrome.js");

test("check if a word is a palindrome", () => {
  expect(palindrome("ola salo")).toBe(true);
});
