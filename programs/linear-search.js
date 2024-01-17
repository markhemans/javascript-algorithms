/**
 * @param {string[]} arr - array to be searched.
 * @param {string} x - item to be found.
 * @returns {(string)} array position of x.
 * @summary Linear search goes through the entire array looking for a variable and returns the array position of this variable.   
 */

function linearSearch(arr, x)
{
	let i;
	
	for (i = 0; i < arr.length; i++)
	{
		if (arr[i] == x)
		{
			return i;
		}
	}
	return -1;
}

// Driver Code

	let arr = [ 2, 3, 4, 10, 40 ];
	let x = 40;

// Test

	let result = linearSearch(arr, x);
	(result == -1)
	? console.log("Element is not present in array")
	: console.log("Element is present at index " + result);