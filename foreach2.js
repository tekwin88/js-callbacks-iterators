/*
	For Each 2:
	Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
 */
 
 var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here

for (i=0; i<foods.length; i++) {
  foods.forEach(function (item) {
  console.log(foods[i].name + " is " + foods[i].level + " delicious");
  });
};



// Output
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious