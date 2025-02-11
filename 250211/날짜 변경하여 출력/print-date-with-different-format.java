import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String[] strArr = s.split("\\.");
        System.out.println(strArr[1] + "-" + strArr[2] + "-" + strArr[0]);
    }
}