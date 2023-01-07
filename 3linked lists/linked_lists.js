class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
    console.log("this", this);
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    console.log("this2", this);
    this.tail = newNode;
    this.length++;
    console.log("this3", this);
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    console.log("this4", this);
    this.head = newNode;
    console.log("this5", this);
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
