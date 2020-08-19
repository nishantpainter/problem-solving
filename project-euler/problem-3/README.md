# Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

# Solution JS
```
function getPrimeFactors(number) {
  let current = number;
  const factors = [];

  while (current !== 1) {
    for (let i = 2; ; i++) {
      if (current % i === 0) {
        current = current / i;
        factors.push(i);
        break;
      }
    }
  }

  return factors;
}

console.log(Math.max(...getPrimeFactors(600851475143))); // 6857

```

# Solution C
```
#include <stdio.h>

int main()
{
    register long num = 600851475143;
    register int max = 2;
    register int i;
    while(max < num){
        for(i = 2; ;i++){
            if(num % i == 0){
                if(i > max){
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
```