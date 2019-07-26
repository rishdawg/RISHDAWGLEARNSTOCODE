const compose = (f, g) => x => f(g(x));

const g = x => x * 5;
const f = x => x * 3;

const result = compose(f, g);
console.log(result(5)); // answer should be 75

// composing is act of pipelining the result of one function
/* it makes the relationship between functions explicit.
   In this example I know that f is dependent on the result of g
   */
