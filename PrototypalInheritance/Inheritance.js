const prototypes = {
    hasVertebrates : true,
    hasEarbones: true,
    hasHair: true,
    warmBlooded: true,
    layEggs: false,
}

const monkey = Object.create(prototypes);

monkey.__proto__.name = 'GOO-GOO'; // You have to be careful when adding a prototype. Check out what the name of the playtypus is.

const playtypus = Object.create(prototypes);
playtypus.layEggs = true; // Overwriting the prototype 

console.log('Playtypus layseggs?', playtypus.layEggs);
console.log('Playtypus Name', playtypus.name);

console.log('Monkey', monkey); //should be an empty object because monkey does not have any properties itself.
console.log('Monkey hair?', monkey.hasHair);  // if you a reference a prototype it is available 

