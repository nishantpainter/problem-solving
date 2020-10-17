function getSumForPrimesLessThan(number) {
  let sum = 0;

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
      sum += i;
    }

    if (i >= number) {
      break;
    }
  }

  return sum;
}

console.log(getSumForPrimesLessThan(2000000)); //142913828922
