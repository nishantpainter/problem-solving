public class Solution9 {
    public static void printProductOfPythagoreanTripletWithSum(int sum) {
        int a = 1;
        int b = 1;
        for (int i = 1; i <= sum - 1; i++) {
            int terminate = 0;
            for (int j = sum - i; j >= 1; j--) {
                double value = Math.pow(sum, 2) - 2 * sum * i - 2 * sum * j + 2 * i * j;
                if (value == 0) {
                    a = i;
                    b = j;
                    terminate = 1;
                    break;
                }
            }

            if (terminate == 1) {
                break;
            }
        }

        System.out.println(a * b * Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))); //31875000
    }

    public static void main(String[] args) {
        int sum = 1000;
        Solution9.printProductOfPythagoreanTripletWithSum(sum);
    }
}