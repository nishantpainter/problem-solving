## Problem 6

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + . . . + 10^2 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + . . . + 10) ^ 2 = 55 ^ 2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025-385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

## Solution JS

```
function getSumOfSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

function getSquareOfSum(n) {
  return Math.pow((n * (n + 1)) / 2, 2);
}

function getDifference(n) {
  return Math.abs(getSumOfSquares(n) - getSquareOfSum(n));
}

console.log(getDifference(10)); // 2640
console.log(getDifference(100)); // 25164150
```

## Solution C

```
#include <stdio.h>
#include <math.h>
#include <stdlib.h>

long getSquareOfSum(int n)
{
    return pow((n * (n + 1)) / 2, 2);
}

long getSumOfSquare(int n)
{
    return (n * (n + 1) * ((2 * n) + 1)) / 6;
}

int main()
{
    register int n = 100;
    printf("%d", abs(getSumOfSquare(n) - getSquareOfSum(n))); // 25164150
    return 0;
}
```

## Solution JAVA
```
import java.lang.Math;

public class Solution6 {

    public static long getSquareOfSum(int n) {
        return (long) Math.pow((n * (n + 1)) / 2, 2);
    }

    public static long getSumOfSquare(int n) {
        return (n * (n + 1) * ((2 * n) + 1)) / 6;
    }

    public static void main(String[] args) {
        int n = 100;
        System.out.println(Math.abs(Solution6.getSumOfSquare(n) - Solution6.getSquareOfSum(n)));
    }
}
```