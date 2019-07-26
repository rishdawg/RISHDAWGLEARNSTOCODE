// get an array names and bring back the names with shortest length names

const names = ['Tom', 'Dan', 'Jake', 'Blake'];

// unfunctional way to do it

let shortestLength = 1000000000000; // introducing dependencies that are not inputs of the function.
const shortestNames = [];

const unfunctional = () => {
  for (let i = 0; i < names.length; i++) { // for loops in general show how you are solving the problem not what the intent of this is
    if (names[i].length < shortestLength) shortestLength = names[i].length;
  }

  for (let i = 0; i < names.length; i++) {
    if (names[i].length === shortestLength) shortestNames.push(names[i]);
  }

  return shortestNames;
};

// functional way to do it

const getShortestLength = names => Math.min.apply(Math, names.map(name => name.length));
const functional = (names) => {
  const shortestLength = getShortestLength(names);
  const filterByLength = length => element => element.length === length;
  const compose = (f, g) => x => f(g(x));
  const filterByShortestLength = compose(filterByLength, getShortestLength);
  return names.filter(filterByShortestLength(names));
};

// console.log(unfunctional());
console.log(functional(names));
