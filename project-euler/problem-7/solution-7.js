function getFirstNPrimeNumbers(n) {
  let count = 0;

  for (let i = 0; ; i++) {
    if (i === 0 || i === 1) {
      continue;
    }

    let isPrime = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count += 1;
    }

    if (count === n) {
      return i;
    }
  }
}

console.log(getFirstNPrimeNumbers(10001)); //104743
