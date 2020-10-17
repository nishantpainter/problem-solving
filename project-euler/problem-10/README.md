## Problem 10

The sum of the primes below 10 is `2 + 3 + 5 + 7 = 17`.

Find the sum of all the primes below two million.

## Solution JS
```
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

```

## Solution C
```
#include <stdio.h>

void getSumForPrimesLessThan(int);

int main()
{
    int number = 2000000;
    getSumForPrimesLessThan(number);
    return 0;
}

void getSumForPrimesLessThan(int number)
{
    long sum = 0;

    for (int i = 0;; i++)
    {
        if (i == 0 || i == 1)
        {
            continue;
        }

        int isPrime = 1;

        for (int j = 2; j <= i / 2; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
                break;
            }
        }

        if (isPrime == 1)
        {
            sum += i;
        }

        if (i >= number)
        {
            break;
        }
    }

    printf("%ld", sum); // 142913828922
}
```

## Solution JAVA
```
public class Solution10 {
    public static void getSumForPrimesLessThan(int number) {
        long sum = 0;
        for (int i = 0;; i++) {
            if (i == 0 || i == 1) {
                continue;
            }
            int isPrime = 1;
            for (int j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    isPrime = 0;
                    break;
                }
            }
            if (isPrime == 1) {
                sum += i;
            }
            if (i >= number) {
                break;
            }
        }
        System.out.println(sum);
    }

    public static void main(String[] args) {
        int number = 2000000;
        Solution10.getSumForPrimesLessThan(number); // 142913828922
    }
}
```