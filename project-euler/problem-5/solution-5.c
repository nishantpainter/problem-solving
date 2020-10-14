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
