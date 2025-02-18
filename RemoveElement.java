import java.util.Arrays;

public class RemoveElement {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int n = 8; 

        System.out.println("Original Array: " + Arrays.toString(array));
        array = removeElement(array, n);
        System.out.println("Array after removing element at index " + n + ": " + Arrays.toString(array));
    }
    
    public static int[] removeElement(int[] array, int index) {
        if (index < 0 || index >= array.length) {
            System.out.println("Index out of bounds");
            return array;
        }

        int[] newArray = new int[array.length - 1];
        for (int i = 0, j = 0; i < array.length; i++) {
            if (i != index) {
                newArray[j++] = array[i];
            }
        }
        return newArray;
    }
}

