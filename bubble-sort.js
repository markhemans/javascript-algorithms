/**
 * Bubble Sort
 * @function bubbleSort
 * @param {string[]} arr - array to be searched.
 * @param {function} swap - function to swap two elements in an array.
 * @returns {(string)} sorted array.
 * @summary Bubble sort bubbles up the higest element one by one until the array is sorted. It starts with the first two elements and the window is repeated from the start and closes from the end. The time complexity of the above algorithm is O(n^2).   
 */


 function swap(arr,leftposition, rightposition)
 {
     let temp = arr[leftposition];
     arr[leftposition] = arr[rightposition];
     arr[rightposition] = temp;
 }


function bubbleSort(arr)
{
    let leftposition;
    let rightposition;

    for (leftposition = 0; leftposition < arr.length-1; leftposition++)
    {
        for (rightposition = 0; rightposition < arr.length-1-leftposition; rightposition++)
        {
            if (arr[rightposition] > arr[rightposition+1])
            {
                swap(arr,rightposition,rightposition+1);
            }
        }

    }
}

// Driver code
let arr = [64, 34, 25, 12, 22, 11, 90];

// Test
console.log(arr);
bubbleSort(arr);
console.log(arr);

