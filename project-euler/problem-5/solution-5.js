function getSmallestDivisibleNumber(range) {
  const [min, max] = range;
  let number;
  for (let i = 1; ; i++) {
    let isDivisible = true;
    for (let j = min; j <= max; j++) {
      if (i % j !== 0) {
        isDivisible = false;
        break;
      }
    }
    if (!isDivisible) {
      continue;
    } else {
      number = i;
      break;
    }
  }
  return number;
}

console.log(getSmallestDivisibleNumber([1, 20])); //232792560
