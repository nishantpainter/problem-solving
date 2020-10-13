function isPalindrome(number) {
  return number.toString().split("").reverse().join("") === number.toString();
}

function largest3DigitProductPalindrome() {
  let products = [];
  for (let i = 1; i <= 999; i++) {
    for (let j = 1; j <= 999; j++) {
      products.push(i * j);
    }
  }

  return Math.max(...products.filter((p) => isPalindrome(p)));
}

console.log(largest3DigitProductPalindrome()); //906609
