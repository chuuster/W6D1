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

function curriedSum(numArgs) {
  let numbers = [];
  
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((accum, el) => {return accum + el;});
    } else {
      return _curriedSum;
    }
  }
  
  return _curriedSum;
}

function sumArray(args) {
  return args.reduce((accum, el) => {
    return accum + el;
  });
}

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  function _innerCurry(arg) {
    args.push(arg);
    if (args.length === numArgs){
      return that(args);
    } else return _innerCurry;
  }
  return _innerCurry;
};

console.log(sumArray.curry(3)(1)(2)(3));
