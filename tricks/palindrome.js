/**
 * @param {number} x
 * @return {boolean}
 * isPalindrome returns if true or false if the number is a palindrome.
 */

 export function isPalindrome(x)
 
 {
    if (x<0 || (x % 10 == 0 && x!=0))
        {
            return false;
        }
    
    if (x<10)
        {
            return true;
        }
    
    
    let reversedNumber = 0;
    while (x>reversedNumber)
        {
            reversedNumber = Math.floor((reversedNumber * 10) + (x % 10));
            x = Math.floor((x/10));
        }
    
    return (x == reversedNumber || x == Math.floor(reversedNumber/10));
}

// Driver code


// Test
console.log(isPalindrome(10700));
console.log(isPalindrome(0));
console.log(isPalindrome(-101));

// questions ?
// what if x is a negative number?