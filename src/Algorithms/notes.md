# Algorithms

## What is it
* A sequence of steps to solve a clearly defined problem

## How do you know you have the best performing algorithm?
* Answer: Daily Double, j.k understanding the Time Complexity
* Wait Rish, hold up why don't we just use time to determine if an algorithm is faster or slower? Whats up with calling it Time Complexity? Like set a start and end time and take the difference and call it a day.
  * Bruh think about it for a second, if I run the same algorithm on a hella slow computer and compared that to brand new Mac, the mac will win out. Also there are other ways to speed stuff up like having caches store stuff so time is not the best thing to use to measue if a function is written in its most optimal way.

## Time Complexity
* What does time complexity mean?
  * It means that even though we are not measuring **concreate time values**, we want to figure out if there are any **trends** that time will take based on how we write our code
* What are some common trends?
  * Constant (time it takes has no regard to the input)
  * Linear (time it takes will grow linearly as the input does)
  * Quadratic
  * Cubic
  * Logarithmic
  * GO BACK TO ALEGBRA 2

## BIG O Notation
* Ok Rish, I get that time complexity is basically graphs from our high school days but how do we get from a function I write out in code and translate it into high school algebra? wtf? Also how do I write it in this fancy Notation that uses the letter O.
  * Asymptotic Analysis (Take a look at the BIGO folder)
    * Define the function
      * Count the number of expression executions
    * Find the fastest growing term
    * Remove the coefficient