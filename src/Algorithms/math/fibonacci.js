// function fib takes in a index and it should return the value in the index
// the comments next to each line are to measure the time complexity of this
const fib = (index) => {
  const fibSequence = [1,1]; // 1
  if(index<= 1) return fibSequence[index]; // 1
  for(let i=2; i<= index; i++){ // 1
    fibSequence.push(fibSequence[i-2] + fibSequence[i-1]); // n-2
  }
  return fibSequence[index]; // 1
};

// T= 1+1+1+(n-2) = 1+n = O(n) --> linear as long as index greater than 1
console.log(fib(0));