class Fibonacci{
    public static void main(String[] args){
        int n=10;
        for(int i=0;i<n;i++){
            System.out.print(fibonacci(i)+" ");
        }
    }
    public static int
    fibonacci(int n){
        if(n<=1){
            return n;}
            else{
                return
                fibonacci(n-1)+fibonacci(n-2);
            }
        }
        int fibonacci(int n, int[] memo){
            if(memo[n]!=-1){
            return memo[n];
            }
            if(n<=1){
                return n;
            }
            memo[n]=fibonacci(n-1,memo)+fibonacci(n-2,memo);
            return memo[n];
            }
        }
        
