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