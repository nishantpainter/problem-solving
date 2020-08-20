# Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

# Solution JS

```
const NumberUtils = require("../../utils/number-utils");
const { getMultiplesOf, getSumOf, getUnique } = NumberUtils;

const number = 999;
const multiplesOf3 = getMultiplesOf(3, number);
const multiplesOf5 = getMultiplesOf(5, number);
const multiples = multiplesOf3.concat(multiplesOf5);
const uniqueMultiples = getUnique(multiples);
const sum = getSumOf(uniqueMultiples);
console.log(sum); //233168
```

# Solution C

```
#include <stdio.h>

int main()
{
    int sum = 0;
    for (int i = 1; i < 1000; i++)
    {
        if (i % 3 == 0 || i % 5 == 0)
        {
            sum += i;
        }
    }
    printf("%d", sum);
    return 0;
}

```