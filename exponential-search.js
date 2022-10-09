/**
 * @param {string[]} arr - array to be searched.
 * @param {string} x - item to be found.
 * @param {function} binarySearch(arr,l,r,x) - binary search function.
 * @returns {(string)} array position of x.
 * @summary Exponential search looks for an item expontentially.  The time complexity of the above algorithm is O(logn).   
 */

function exponentialSearch(arr, x)
{

    let i = 1;
    
    // zero pass
    if (arr[0] == x)
    {
        return 0;
    }
    
    
    while ((i < arr.length) && (arr[i] <= x))
    {
        i = i * 2;
    }
    
    return binarySearch(arr, i/2,  Math.min(i, arr.length-1), x);
}



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

// Driver code
let arr = [2, 3, 4, 10, 40,50, 60, 70, 80, 90, 100, 110, 120, 130, 140];
let x = 10;


// Test
let result = exponentialSearch(arr, x);
(result == -1) ? console.log("Element is not present in array")
               :  console.log("Element is present at index " + result);

// Useful for unbounded arrays
// Faster than binary search when element is closer to start of array.