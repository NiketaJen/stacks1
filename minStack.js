/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = new Stack();
    this.minStack = new Stack();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);   //value is size of the stack

    if (this.minStack.size === 0) {
        this.minStack.push(val);
    } else if (val <= this.minStack.peek()){     //if value is less than or = to the top number in the stack, push the value to minStack
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let removedElement = this.stack.pop()
    if (removedElement === this.minStack.peek()) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.peek()
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.minStack.peek()
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//need to create a Stack class bc JS does not have Stack objects
 class Stack {
    constructor() {
      this.storage = {};
      this.size = 0;
    }
    
    //the size of the storage = the value. Add to size when you push
    push(val) {
      this.storage[this.size] = val;
      this.size++;
    }
  
    pop() {
      let top = this.storage[this.size - 1];
      this.size--;
      delete this.storage[this.size];
      return top;
    }
  
    peek() {
      return this.storage[this.size - 1];
    }
  
    empty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  }