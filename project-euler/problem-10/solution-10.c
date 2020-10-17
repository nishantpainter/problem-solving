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