#include <stdio.h>

int main()
{
    register int sum = 2; // Even sum from [1,2]
    register int secondLeft = 1;
    register int firstLeft = 2;

    for (int i = 3;; i++)
    {
        register int next = firstLeft + secondLeft;
        if (next <= 4000000)
        {
            if (next % 2 == 0)
            {
                sum += next;
            }
            secondLeft = firstLeft;
            firstLeft = next;
        }
        else
        {
            break;
        }
    }

    printf("%d", sum);

    return 0; //4613732
}
