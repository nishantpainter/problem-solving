function getIntegers(n) {
  if (!n) return;
  return new Array(n).fill(0).map((_, i) => i + 1);
}

function getMultiplesOf(n, number) {
  if (!(n && number)) return;
  return getIntegers(number).filter((value) => value % n === 0);
}

function getSumOf(list) {
  if (!(list && Array.isArray(list))) return;
  return list.reduce((sum, i) => sum + i, 0);
}

function getUnique(list) {
  if (!(list && Array.isArray(list))) return;
  return list.filter((v, i, a) => a.indexOf(v) === i);
}

function getEvenValueSum(list) {
  if (!(list && Array.isArray(list))) return;
  return list.reduce((sum, v) => (v % 2 === 0 ? sum + v : sum), 0);
}

module.exports = {
  getIntegers,
  getMultiplesOf,
  getSumOf,
  getUnique,
  getEvenValueSum,
};
