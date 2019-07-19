class Stack {
  constructor(... args ){
    this.store = [... args.reverse()];
  }
  push(value){
    return this.store.unshift(value);
  }
  pop(){
   return this.store.shift();
  }
  peek(){
    return this.store[0];
  }
  length(){
    return this.store.length;
  }

}
const fruits = new Stack();
fruits.push('apple'); // push
fruits.push('orange');

console.log(fruits.peek()); // peek
console.log(fruits.length()) // length

fruits.pop(); // pop
console.log(fruits);