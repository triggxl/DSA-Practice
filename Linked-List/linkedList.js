class _Node {
  constructor() {
    this.value = value;
    this.next = next;
  }
  //create new node item
  insertFirst(item) {
    //point head to new node
    this.head = new _Node(item, this.head)
  }
  //create new node item
  insertLast(item) {
    //make last item head if list is empty
    if (this.head === null) {
      this.insertFirst(item);
    }
    //set next pointer to new node
    let tempNode = null;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    //pointer 'null' ? make last item 
    tempNode.next = new _Node(item, null)
  }
  //remove
  remove(item) {
    //if empty
    if (!this.head) {
      return null
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  //find
  find(item) {
    //Start of head
    let currNode = this.head;
    // if list is empty
    if (!this.head) {
      return null;
    }
    // Check for item
    while (currNode.value !== item) {
      if (currNode.next == null) {
        return null;
      }
      // otherwise keep looking
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}

// simplest sequential data structure read from front to end
// always points to the head

main = new _Node
// Creating a singly linked list
function main() {
  let SLL = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  insertFirst(SLL);
  SLL.push('Tauhida');
  SLL.splice(3, 'Husker');
  function insertBefore() {

  }

  insertBefore('Athena', 'Boomer')

  function insertAfter() {

  }
  insertAfter('Hotdog', 'Helo')

  function insertAt() {

  }
  insertAt(3, 'Kat')
  SLL.pop('Tauhida')
}

// Supplemental functions for a linked list
