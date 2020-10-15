function getSumOfSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

function getSquareOfSum(n) {
  return Math.pow((n * (n + 1)) / 2, 2);
}

function getDifference(n) {
  return Math.abs(getSumOfSquares(n) - getSquareOfSum(n));
}

console.log(getDifference(10)); // 2640
console.log(getDifference(100)); // 25164150
