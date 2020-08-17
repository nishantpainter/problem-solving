const NumberUtils = require("../../utils/number-utils");
const { getEvenValueSum } = NumberUtils;

function getFibonnaciSeriesUpto(number) {
  if (number <= 1) {
    return [1];
  }

  if (number <= 2) {
    return [1, 2];
  }

  let series = [1, 2];

  for (let i = 3; ; i++) {
    const nextNumber = series[i - 3] + series[i - 2];
    if (nextNumber <= number) {
      series.push(nextNumber);
    } else {
      break;
    }
  }

  return series;
}

getEvenValueSum(getFibonnaciSeriesUpto(4000000)); //4613732
