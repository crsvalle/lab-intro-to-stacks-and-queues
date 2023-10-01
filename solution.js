const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
    this.count = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
    this.count++
  }
  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }
  pop() {
    this.count--
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  size(){
    return this.count;
  }

  toArray() {
    let arr = [];
    let item = this.top;
    while (item) {
    arr.push(item.data);
    item = item.next;
    }
    return arr.sort((a, b) => (a < b ? 1 : -1));
    }

  sort() {
    let sorted = this.toArray();
    for (let x = 0; x< sorted.length; x++){
      this.push(sorted[x])
    }
  }

  findMin(){
    let current = this.top;
    let min = 0;
    while (current){
      if (current.data < min){
        min = cur.data
      }
      current = current.next
    }
    return min
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    } 
    return ++this.size;
  }

  count(){
    return this.size
  }

  isEmpty() {
    return this.first === null;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  getLast(){
    return this.last;
  }
  findMax(){
    let current = this.first;
    let max = 0;
    while (current){
      if (current.data > max){
        max = current.data
      }
      current = current.next
    }
    this.max = max
    return max
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
