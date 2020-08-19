
#include <stdio.h>

int main()
{
    long num = 600851475143;
    int max = 2;
    int i;
    while (num != 1)
    {
        for (i = 2;; i++)
        {
            if (num % i == 0)
            {
                if (i > max)
                {
                    max = i;
                }
                num = num / i;
                break;
            }
        }
    }

    printf("%d", max); // 6857
    return 0;
}
