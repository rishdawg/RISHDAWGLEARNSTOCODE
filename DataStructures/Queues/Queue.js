class Queue {
  constructor () {
    this.collection = [];
  }
  print(){
    console.log(this.collection);
  }
  enque (element) {
    return this.collection.push(element);
  }
  deque () {
    return this.collection.shift();
  }
  front () {
    return this.collection[0];
  }
  size () {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length === 0
  }
}

const q = new Queue();
q.enque('1');
q.enque('2');
q.enque('3');
q.print();
q.deque();
console.log(q.front());
q.enque('4');
q.print();