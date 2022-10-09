/**
 * @param {string[]} arr - array to be searched.
 * @returns {string[]} arr - increaingly sorted array.
 * @summary Insertion Sort sorts elements like a pack of cards. 
 */

function insertionSort(arr)
{
  let tobesorted;
  let sortedstack;

  for (let i = 1; i < arr.length; i++)
  {

    tobesorted = arr[i];
    sortedstack = i - 1;

    // while there are elements greater
    while((arr[sortedstack] > tobesorted) && (sortedstack >= 0))
    {
      // shift all elements to the right from current position
      arr[sortedstack+1] = arr[sortedstack];
      sortedstack--;
    }

    // at this point it is not lesser, so add it right after the sorted stack
    arr[sortedstack+1] = tobesorted;
    
  }

}


// Driver code
  let arr = [-1, 5, 5, 5, -2 ];
  console.log(arr);

  // Test
  insertionSort(arr);
  console.log(arr);

