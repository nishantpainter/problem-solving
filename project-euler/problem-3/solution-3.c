#include <stdio.h>

int main()
{
    register long num = 600851475143;
    register int max = 2;
    register int i;
    while (max < num)
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