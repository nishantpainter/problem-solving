const NumberUtils = require("../../utils/number-utils");
const { getMultiplesOf, getSumOf, getUnique } = NumberUtils;

const number = 999;
const multiplesOf3 = getMultiplesOf(3, number);
const multiplesOf5 = getMultiplesOf(5, number);
const multiples = multiplesOf3.concat(multiplesOf5);
const uniqueMultiples = getUnique(multiples);
const sum = getSumOf(uniqueMultiples);
console.log(sum); //233168