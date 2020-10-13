## Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

## Solution JS
```
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
```