/* 
 Adding a function as a prototype has performance benefits.
 See for yourself run function one and two and tell me which one is faster.
 When doing function one you will create a new instance of "addStuff" everytime,
 however function two will only create on instance of "addstuff"
 */

function one () {
    this.addStuff = function () {
        return true;
    }
}

function two () {

}

two.prototype.addStuff = function () {
    return true;
};

const emptyArray = [];

console.time('e');

for ( let i=0; i<20000000000; i++) {
    emptyArray.push(new one());
    // emptyArray.push(new two());
} 