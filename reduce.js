var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication

var multiply = function (a, b) {
  return a * b;
};

var result = numbers.reduce(multiply);
console.log(result);

// output 
// 665280