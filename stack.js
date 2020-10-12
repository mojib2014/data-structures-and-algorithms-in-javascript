class Stack {
  constructor() {
    this.size = 0;
    this.items = [];
  }
  
  push(item) {
    // we use the size property as index and we are incrementing it inside the bracket notation
    // each time you call the push method it's going to add the item at that index and increment it and so on
    this.items[this.size++] = item;
  }
  
  pop() {
    // if stack is empty(we are using our own method to check if the stack is empty)
    // we are going to throw an error like stack is empty
    // than we remove an item from the top of the stack and we should decrement the size property by one
    if (this.isEmpty()) throw new Error("Stack is empty.");
    
    return +this.items.splice(--this.size, 1).join("");
  }
  
  peek() {
    // first we need to check if the stack is empty
    if (this.isEmpty()) throw new Error("Stack is empty");
    
    // we simply return the item on the top of the stack without removing it
    return this.items[this.size - 1];
  }
  
  isEmpty() {
    // we simply check the size property, if it's zero than the stack is empty
    // and it will return true
    return this.size === 0;
  }
}

const stack = new Stack();
stack.push(20);
stack.push(10);
stack.push(5);
stack.push(1);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack);
 
