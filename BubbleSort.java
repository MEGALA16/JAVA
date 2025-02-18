class BubbleSort{
    static void bubbleSort(int[] array){
        int size=array.length;
        for(int i=0;i<size-1;i++){
            for(int j=0;j<size-1-i;j++){
                if(array[j]>array[j+1]){
                    int temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
            }
        }
    }
        public static void main(String[] args){
            int[] data={5,7,3,1,6,8};
            bubbleSort(data);
            System.out.println("Sorted array in Ascending order:");
            for(int i=0;i<data.length;i++){
                System.out.println(data[i]);
            
            }
        }
    }

