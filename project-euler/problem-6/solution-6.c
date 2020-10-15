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
