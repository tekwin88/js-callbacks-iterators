var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// Your code here!

// Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

var isCool = function(person) {
	return person.coolnessScore > 20;
}


for (i=0; i<people.length; i++) {
    var coolPeople = people.filter(isCool);
    console.log(coolPeople[i].name + " is cool")
}

// Output results:
//
// Bob is cool
// Jen is cool