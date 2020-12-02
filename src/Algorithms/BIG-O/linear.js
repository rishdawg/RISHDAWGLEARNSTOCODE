// problem sumUp Every number in this array

const Sum = (nums) => (
  nums.reduce((accumulator, currentValue) => { // 1 - you only have to intialize this once
    return accumulator + currentValue; // n - where n is length of nums, this will run the same num as the length of the array
  }, 0)
);

/* Derive BIG O
  1. Count Expressions to create a function, please look at the comment next to the functions to figure out how I got the function below
    T = 1+n  a.k.a y= mx +b where x is n
  2. Find the fastest growing term --> n
  3. Remove the coefficient --> there is none in this case but still
  = O(n)
*/

Sum([1,2,3]);