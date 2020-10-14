## Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

## Solution JS

```
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

```

## Solution C

```
#include <stdio.h>
#include <stdbool.h>

void getSmallestDivisibleNumber(int, int);

int main()
{
    getSmallestDivisibleNumber(1, 20);
    return 0;
}

void getSmallestDivisibleNumber(int min, int max)
{
    for (int i = 1;; i++)
    {
        bool isDivisible = true;
        for (int j = min; j <= max; j++)
        {
            if (i % j != 0)
            {
                isDivisible = false;
                break;
            }
        }

        if (!isDivisible)
        {
            continue;
        }
        else
        {
            printf("%d", i); ////232792560
            break;
        }
    }
}

```
