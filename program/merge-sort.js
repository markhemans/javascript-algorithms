/**
 * @function mergeSort
 * @param {string[]} arr - array to be searched.
 * @returns {(string)} sorted array.
 * @summary - This function takes in an array and sorts it using the merge sort algorithm.   
 */

function mergeSort(unsortedArray)
{
    console.log("/////////MERGESORT WAS CALLED///////// with" +unsortedArray);
   
    if(unsortedArray.length < 2)
    {
        console.log("finally returned (unsorted)" + unsortedArray);
        return unsortedArray; //  if there is only one item in UNSORTED array
    }

    const middle_index = Math.floor(unsortedArray.length / 2); // find the middle index of the array
    const sortingArray = unsortedArray.splice(0, middle_index); // take contents of left side of array into a left array variable
    console.log("Sorting" + sortingArray);
    console.log("Unsorted" + unsortedArray);
    return merge(mergeSort(sortingArray), mergeSort(unsortedArray)); // curry function
    
}

function merge(leftArray, rightArray)
{
    console.log("//////MERGE WAS CALLED//////// with " + leftArray + " and " + rightArray);
    let sortedArray = [];
    
    console.log("LEFT ARRAY= " +leftArray + "\n UNSORTED ARRAY= " +rightArray);
    while (leftArray.length && rightArray.length) // only happens when there is 1 element in both arrays
    {
        console.log("we entered while loop");
        if (leftArray[0] < rightArray[0])
        {
            sortedArray.push(leftArray.shift())  
        }
        else
        {
            sortedArray.push(rightArray.shift()) 
        }
        console.log("leftmerge" + leftArray);
        console.log("rightmerge" + rightArray);
        console.log("sortedmerge" + sortedArray);
    }
    console.log("we done! =========================" + [ ...sortedArray, ...leftArray, ...rightArray]);
    console.log("lefarray" + leftArray);
    console.log("rightarray" + rightArray);
    console.log("sortedarray" + sortedArray);
    return [ ...sortedArray, ...leftArray, ...rightArray]; // return the sorted array as well as left side of arrays and right side of arrays
}
  
// Driver code
let unsortedArray = [5, 3, 2, 4, 1, 0, 0, -2, -3, -4, -5];
console.log(unsortedArray);

// Test code
let merged = mergeSort(unsortedArray);

// because it happens when the function is called, it returns empty, assign it to a variable?
console.log(merged);

 //console.log(mergeSort(unsortedArray));