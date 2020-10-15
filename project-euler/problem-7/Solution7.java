public class Solution7 {
    public static int getFirstNPrimeNumber(int n) {
        int count = 0;

        for (int i = 0;; i++) {
            if (i == 0 || i == 1) {
                continue;
            }

            boolean isPrime = true;

            for (int j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    isPrime = false;
                }
            }

            if (isPrime) {
                count = count + 1;
            }

            if (count == n) {
                return i;
            }
        }

    }

    public static void main(String[] args) {
        int n = 10001;
        System.out.println(Solution7.getFirstNPrimeNumber(n)); // 104743
    }
}