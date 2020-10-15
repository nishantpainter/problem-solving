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