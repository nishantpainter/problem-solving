import java.lang.Math;

public class Solution6 {

    public static long getSquareOfSum(int n) {
        return (long) Math.pow((n * (n + 1)) / 2, 2);
    }

    public static long getSumOfSquare(int n) {
        return (n * (n + 1) * ((2 * n) + 1)) / 6;
    }

    public static void main(String[] args) {
        int n = 100;
        System.out.println(Math.abs(Solution6.getSumOfSquare(n) - Solution6.getSquareOfSum(n)));
    }
}