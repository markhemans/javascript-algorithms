/**
 * @param {string[]} arr - array to be searched.
 * @param {string} l - left window.
 * @param {string} r - right window.
 * @param {string} x - item to be found.
 * @returns {(string)} array position of x.
 * @summary Recusrive Binary search. Params are left and right windows. It stops when right window is greater or equal to left window.  The time complexity of the above algorithm is O(logn).   
 */

function binarySearch(arr, l, r, x)
{
	if (r >= l)
	{
		let mid = l + Math.floor((r - l) / 2);

	
		if (arr[mid] == x)
		{
			return mid;
		}
		

		if (arr[mid] > x)
		{
			return binarySearch(arr, l, mid - 1, x);
		}
		
		// else
		return binarySearch(arr, mid + 1, r, x);
	}

	//*//
	return -1;
}

// Driver Code

let arr = [ 2, 3, 4, 10, 40 ];
let x = 40;
let n = arr.length;

// Test

let result = binarySearch(arr, 0, n, x);
(result == -1) ? console.log( "Element is not present in array")
				: console.log("Element is present at index " +result);