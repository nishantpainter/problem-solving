## Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

## Solution JS
```
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

```

## Solution C
```
#include <stdio.h>

int getFirstNPrimeNumber(int n)
{
    int count = 0;

    for (int i = 0;; i++)
    {
        if (i == 0 || i == 1)
        {
            continue;
        }

        int isPrime = 1;

        for (int j = 2; j <= i / 2; ++j)
        {
            if (i % j == 0)
            {
                isPrime = 0;
            }
        }

        if (isPrime == 1)
        {
            count += 1;
        }

        if (count == n)
        {
            return i;
        }
    }
}

int main()
{
    int n = 10001;
    printf("%d", getFirstNPrimeNumber(n)); // 104743
    return 0;
}
```

## Solution JAVA
```
public class Solution7 {
    public static int getFirstNPrimeNumber(int n) {
        int count = 0;

        for (int i = 0;; i++) {
            if (i == 0 || i == 1) {
                continue;
            }

            boolean isPrime = true;

            for (int j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    isPrime = false;
                }
            }

            if (isPrime) {
                count = count + 1;
            }

            if (count == n) {
                return i;
            }
        }

    }

    public static void main(String[] args) {
        int n = 10001;
        System.out.println(Solution7.getFirstNPrimeNumber(n)); // 104743
    }
}
```