//-------------------- Practicing -------------------------------------
$("#main").append("Jonathan Blanco");		

var firstName = "Jon";
var age = 34;

console.log(age);

var awesomeThoughts = "I am Jon and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);

/* DOT notation example: Adding properties to an object */
var work = {};
work.job = "Student";
work.employer = "FIU";
work.yearsWorked = "2014-2016";
work.city = "Miami";

/* BRACKET notation example: Adding properties to an object */
var education1 = {};
education1["name"] = "FIU";
education1["yearsAttended"] = "2014-2017";
education1["city"] = "Miami";

$("#main").append(work.job);
$("#main").append(education1["name"]);
