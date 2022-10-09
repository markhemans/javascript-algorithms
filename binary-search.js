/**
 * @param {string[]} arr - array to be searched.
 * @param {string} x - item to be found.
 * @returns {(string)} array position of x.
 * @summary Binary search looks for an item in the middle of the array to check if it is an item. It repeats until low=high. The time complexity of the above algorithm is O(logn).   
 */

function binarySearch(arr, x)
{
	let leftindex = 0;
	let rightindex = arr.length - 1;
	let mid;

	while (rightindex >= leftindex)
    {

		mid = leftindex + Math.floor((rightindex - leftindex) / 2); 

		if (arr[mid] == x)
        {
			return mid;
        }

	
		if (arr[mid] > x)
        {
			rightindex = mid - 1;
        }

		else
        {
			leftindex = mid + 1;
        }
	}

	//*//
	return -1;
}

// Driver Code
let arr = [2, 3, 4, 10, 40];
let x = 10;
	
// Test
result = binarySearch(arr, x);	
(result == -1) ? console.log("Element is not present in array")
			   : console.log("Element is present at index " + result);
				



