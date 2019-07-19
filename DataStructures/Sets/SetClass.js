class RishdawgSet {
  constructor () {
    this.collection = [];
  }
  has (element) {
    return this.collection.indexOf(element) !== -1;
  }
  add (element) {
    if (!this.has(element)){
      this.collection.push(element);
    }
  }
  values () {
    return this.collection;
  }
  remove (element) {
    if (this.has(element)){
      const index = this.collection.indexOf(element);
      this.collection.splice(index,1);
    }
  }
  size () {
    return this.collection.length;
  }
  union (anothaSet) {
    const unionSet = new Set();
    const currentSetValues = this.values();
    const anothaSetValues = anothaSet.values();
    currentSetValues.forEach((element) => unionSet.add(element));
    anothaSetValues.forEach((element) => unionSet.add(element));
    return unionSet;
  }
  intersection (anothaSet) {
    const intersectionSet = new Set();
    const currentSetValues = this.values();
    currentSetValues.forEach((element) => intersectionSet.add(element));
    intersectionSet.forEach((element) => {
      if(!anothaSet.has(element)){
        intersectionSet.delete(element);
      }
    });
    return intersectionSet;
  }
  difference (anothaSet) {
    const differenceSet = new Set();
    const currentSetValues = this.values();
    currentSetValues.forEach((element) => {
      if(!anothaSet.has(element)){
        differenceSet.add(element)
      }
    });
    return differenceSet;
  }
  subset (anothaSet) {
    const currentSetValues = this.values();
    return currentSetValues.every((value) => anothaSet.has(value));
  }
}

const cards = new RishdawgSet();
cards.add('Ace of Spades'); // add
cards.add('King of Diamonds');
cards.add('Ace of Spades'); // it will not add again

console.log(cards.has('Ace of Spades')); // checks if a value exist
console.log(cards.values());
cards.remove('Ace of Spades'); // remove
console.log(cards.has('Ace of Spades'));
console.log(cards.size());


const secondDeck = new RishdawgSet();
secondDeck.add('Ace of Spades');
secondDeck.add('King of Diamonds');
secondDeck.add('2 of Hearts')

console.log('union', cards.union(secondDeck)); // it will not have king of diamonds twice
console.log('intersection', cards.intersection(secondDeck)); // should only return king of diamonds because those are what is similar between the two sets
console.log('difference', cards.difference(secondDeck)); // this will return empty because all the things in cards exist in second one
console.log('difference part 2', secondDeck.difference(cards));
console.log('subset', cards.subset(secondDeck));