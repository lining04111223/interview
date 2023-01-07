class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
    //console.log("this", this);
  }
  append(value) {
    //0(1)
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    //this.head.next = newNode;//same with previous line
    //console.log("this2", this);
    this.tail = newNode;
    //this.head = newNode; //not same
    this.length++;
    //console.log("this3", this);
    return this;
  }
  prepend(value) {
    //O(1)
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    //console.log("newnode", newNode);
    //console.log("this4", this);
    this.head = newNode;
    //console.log("this5", this);
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      //console.log(currentNode);
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(100, 99);
console.log(myLinkedList.printList());
