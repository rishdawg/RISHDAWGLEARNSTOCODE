class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enque(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  deque() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

const pq = new PriorityQueue();
pq.enque(['Kanter', 5]);
pq.enque(['Tatum', 2]);
pq.enque(['Kemba', 1]);
pq.enque(['Brown', 3]);
pq.enque(['Hayward', 4]);
pq.print();
pq.deque();
pq.print();
