## Problem 9

A Pythagorean triplet is a set of three natural numbers, `a < b < c`, for which,

<code>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></code>

For example, <code>3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup></code>.

There exists exactly one Pythagorean triplet for which, `a + b + c = 1000`.

Find the product abc.

## Solution JS

```
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

```

## Solution C

```
#include <stdio.h>
#include <math.h>

double getProductOfPythagoreanTripletWithSum(int);

int main()
{
    int sum = 1000;
    printf("%lf", getProductOfPythagoreanTripletWithSum(sum));
    return 0;
}

double getProductOfPythagoreanTripletWithSum(int sum)
{
    int a = 1;
    int b = 1;
    for (int i = 1; i <= sum - 1; i++)
    {
        int terminate = 0;
        for (int j = sum - i; j >= 1; j--)
        {
            double value = pow(sum, 2) - 2 * sum * i - 2 * sum * j + 2 * i * j;
            if (value == 0)
            {
                a = i;
                b = j;
                terminate = 1;
                break;
            }
        }

        if (terminate == 1)
        {
            break;
        }
    }

    return a * b * sqrt(pow(a, 2) + pow(b, 2));
}
```

## Solution JAVA

```
public class Solution9 {
    public static void printProductOfPythagoreanTripletWithSum(int sum) {
        int a = 1;
        int b = 1;
        for (int i = 1; i <= sum - 1; i++) {
            int terminate = 0;
            for (int j = sum - i; j >= 1; j--) {
                double value = Math.pow(sum, 2) - 2 * sum * i - 2 * sum * j + 2 * i * j;
                if (value == 0) {
                    a = i;
                    b = j;
                    terminate = 1;
                    break;
                }
            }

            if (terminate == 1) {
                break;
            }
        }

        System.out.println(a * b * Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))); //31875000
    }

    public static void main(String[] args) {
        int sum = 1000;
        Solution9.printProductOfPythagoreanTripletWithSum(sum);
    }
}
```
