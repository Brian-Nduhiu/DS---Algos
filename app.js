/*Stack*/


//Functions: Push, Pop, Peek, Length

/**
 * An array can be used as a stack
 */

let letters = []; // our stack

let word = "BoB";

let reverseWord = "";

//push letters of word into stack

for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

//pop off stack in reverse order

for (let i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
}

if (reverseWord === word) {
    console.log(`${word} is a palindrome.`);
}
else {
    console.log(`${word} is not a palindrome.`);
}

/**
 * Create a stack in JS
 */

let Stack = function () {
    this.count = 0;
    this.storage = {};


    // Adds a value to the end of the stack
    this.push = (value) => {
        this.storage[this.count] = value;
        this.count++;
    };

    // Removes and return the value at the end of the stack
    this.pop = () => {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    // return size of the stack
    this.size = () => this.count;

    // return value at the end of the stack
    this.peek = () => this.storage[this.count - 1];
};

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());