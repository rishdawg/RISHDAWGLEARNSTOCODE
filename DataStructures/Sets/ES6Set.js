// Not all the functions that are normally in a set come with an ES6 Set

const cards = new Set();

cards.add('Ace of Spades'); // add
cards.add('King of Diamonds');
cards.add('Ace of Spades'); // it will not add again

console.log(cards.has('Ace of Spades')); // checks if a value exist
console.log(cards.values());
cards.delete('Ace of Spades'); // remove
console.log(cards.has('Ace of Spades'));
console.log(cards.size);