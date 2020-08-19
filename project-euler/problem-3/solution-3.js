function getPrimeFactors(number) {
  let current = number;
  const factors = [];

  while (current !== 1) {
    for (let i = 2; ; i++) {
      if (current % i === 0) {
        current = current / i;
        factors.push(i);
        break;
      }
    }
  }

  return factors;
}

console.log(Math.max(...getPrimeFactors(600851475143))); // 6857
