// Determine if a num is prime
// A number is considered prime if the only thing it is divisible by is itself and 1;

const isPrime = (num) => {
  let prime = true; // 1
  for(let i =2; i<num; i++ ){ // 1
    if(num % i === 0) { // 1
      prime = false; // n -2
      break; // 1
    }
  }
  return prime; // 1
}
// T= 1+1+1+n-2+1 = n+2 = o(n) --> Linear unless the num is 1 or 2
console.log(isPrime(9));
console.log(isPrime(5));

// another way to find it at least one of the numbers that makes somethin no prime has to be smaller or equal to the square root of the given num

const anotherPrime = (num) => {
  let prime = true; // 1
  for(let i =2; i<Math.sqrt(num); i++ ){ // 1
    if(num % i === 0) { // 1
      prime = false; // sqrt(n) -2
      break; // 1
    }
  }
  return prime; // 1
}

// T= 1+1+1+sqrt(n)-2+1 = n+2 = o(sqrt(n)) --> less than linear, but faster because iteration num went down