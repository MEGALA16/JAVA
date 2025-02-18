public class Array{
    public static void main(String[] args) {
        int[] arr={5,7,3,1,6,8};
        int temp;
        int i;
        temp=arr[0];
        for(i=0;i<arr.length-1;i++){
            if(arr[i+1]<temp){
                temp=arr[i+1];
            }
        }
        System.out.println(temp);
    }
}