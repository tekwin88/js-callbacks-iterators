var people = ['Bob', 'Jen', 'James', 'Isolde'];

// Your code here!

// Write some code using map that takes the above array of objects, and turns the array elements to all caps

var upCased = people.map(function (person) {
  return person.toUpperCase();
});
console.log(upCased);


// OUTPUT
// 
// > [ 'BOB', 'JEN', 'JAMES', 'ISOLDE' ]
