const sup = () => {
  console.log('sup'); // 1
  console.log('j chilling'); // 1
}

/* Derive BIG O
  1. Count Expressions to create a function, please look at the comment next to the functions to figure out how I got the function below
    T = 1+1  a.k.a y= b
  2. Find the fastest growing term --> 1
  3. Remove the coefficient --> there is none in this case but still
  = O(1)
*/