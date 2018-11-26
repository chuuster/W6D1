// function sum() {
//   const numbers = Array.from(arguments);
//   return numbers.reduce((accum, el) => {
//     return accum + el;
//   });
// }

function sum(...args) {
  return args.reduce((accum, el) => {
    return accum + el;
  });
}

Function.prototype.myBind = function(context, ...args1) {
  // let context = args1[0];
  // let args = args1.slice(1);
  // let that = this;
  return (...callArgs) => {
    return this.apply(context, args1.concat(callArgs));
  };
};


// Function.prototype.myBind = function() {
//   let args = Array.from(arguments);
//   let context = args[0];
// 
//   const argues = args.slice(1);
// 
//   let that = this;
//   return function () {
//     let callArgs = Array.from(arguments);
//     return that.apply(context, argues.concat(callArgs));
//   };
// };

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true