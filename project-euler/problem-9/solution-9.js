function getPythagoreanTripletWithSum(sum) {
  let a = 1;
  let b = 1;
  for (let i = 1; i <= sum - 1; i++) {
    let terminate = false;
    for (let j = sum - i; j >= 1; j--) {
      const value = Math.pow(sum, 2) - 2 * sum * i - 2 * sum * j + 2 * i * j;
      if (value === 0) {
        a = i;
        b = j;
        terminate = true;
        break;
      }
    }

    if (terminate) {
      break;
    }
  }
  return [a, b, Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))];
}

const product = getPythagoreanTripletWithSum(1000).reduce((p, i) => p * i, 1);
console.log(product); // 31875000
