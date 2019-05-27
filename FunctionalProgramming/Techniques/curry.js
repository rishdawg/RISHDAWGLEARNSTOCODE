/*
    curry makes a function that takes in n number of arguments into n number of functions each with one argument.
    It is useful for partial application which means delaying instantiating some of the arguments.
*/
const curry = require('lodash.curry');

const joinSentence = (sentencePart1, sentencePart2, sentencePart3) => {
    return sentencePart1 + sentencePart2 + sentencePart3;
}

const curriedSentence = curry(joinSentence);

const I = curriedSentence('I');

console.log(I(''));
console.log(I(' like', ' Celtics'))

