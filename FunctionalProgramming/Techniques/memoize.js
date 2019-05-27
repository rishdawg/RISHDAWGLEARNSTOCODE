const memoize = (funct) => {
    funct.cache = funct.cache || {};
    return (arg) => {
        const key = arg;
        if (funct.cache[key] !== undefined) {
        console.log('Hit that cache bruv! -> ', funct.cache[key]);
        return funct.cache[key]
        } else {
        console.log('I said No NO No Cache');
        funct.cache[key] = funct(arg);
        return funct.cache[key]
        }
    }
};

const fivetable = (n) => n*5;

const memoizedFives = memoize(fivetable);

console.log(memoizedFives(5));
console.log(memoizedFives(2));
console.log(memoizedFives(2));

/* Memoizing is the technique of caching something.
   It is useful when having the potential to ask for the same data multiple times

*/