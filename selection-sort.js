/**
 * Selection Sort
 * @function selectionSort
 * @param {string[]} arr - array to be searched.
 * @param {funtion} swap - function to swap two elements in an array.
 * @returns {(string)} sorted array.
 * @summary Selection sort sorts an array by selecting the smallest item in the current array and swapping with the current position, adding one to the current position. It repeats until the last position is reached. The time complexity of the above algorithm is O(n).   
 */

function swap(arr,leftposition, rightposition)
{
	let temp = arr[leftposition];
	arr[leftposition] = arr[rightposition];
	arr[rightposition] = temp;
}

function selectionSort(arr)
{
	
	let startingindex;
    let endingindex;
    let min_value_index;


	for (startingindex = 0; startingindex < arr.length-1; startingindex++)
	{

		min_value_index = startingindex;

		for (endingindex = startingindex + 1; endingindex < arr.length ; endingindex++)
        {
		    if (arr[endingindex] < arr[min_value_index])
            {
			    min_value_index = endingindex;                
            }  
	    }

        swap(arr,min_value_index, startingindex);
    }

}

// Driver code
let arr = [64, 25, 12, 22, 11];
console.log(arr);

// Test
selectionSort(arr);
console.log(arr);