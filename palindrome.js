function palindrome(string) {
  let letters = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(letters, "");

  let palindromeWord = string.length;
  for (let i = 0; i < palindromeWord / 2; i++) {
    if (string[i] !== string[palindromeWord - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome("ola salo");

console.log(palindrome("katt"));

module.exports = palindrome;
