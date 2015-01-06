// $("#main").append("Darin Davis"); 

// var awesomeThoughts = "JS is awesome";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("awesome", "fun");
// $("#main").append(funThoughts); 

var name = "Darin Davis";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// Lesson 1 quizes
var adjective = "audacity";
var educator = "U" + adjective.slice(2);
console.log(educator); // works

// Instructor direction to use a function:
var s = "audacity";
var udacityizer = function(s) {
	s = "U" + s.slice(2);
	return s;
};
console.log(udacityizer(s));


var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
	var newArray = [];
	var element;

	newArray = _array;
	element = newArray.pop();
	element = element + 1;
	newArray.push(element);

	return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));



var name = "cAmEROn PittMAN";
var elements = name.split(" ");
elements[0] = elements[0].toLowerCase();
elements[1] = elements[1].toUpperCase();
elements[0] = elements[0].slice(0,1).toUpperCase() + elements[0].slice(1);
var finalName = elements[0] + " " + elements[1];
console.log(finalName);

