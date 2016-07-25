//-------------------- Practicing -------------------------------------
// $("#main").append("Jonathan Blanco");		

// var firstName = "Jon";
// var age = 34;

// console.log(age);

// var awesomeThoughts = "I am Jon and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

/* DOT notation example: Adding properties to an object */
// var work = {};
// work.job = "Student";
// work.employer = "FIU";
// work.yearsWorked = "2014-2016";
// work.city = "Miami";

/* BRACKET notation example: Adding properties to an object */
// var education1 = {};
// education1["name"] = "FIU";
// education1["yearsAttended"] = "2014-2017";
// education1["city"] = "Miami";

// $("#main").append(work.job);
// $("#main").append(education1["name"]);
//-------------------------------------------------------------------------

var skill = ["Programmer", "HTML5", "JavaScript", "CSS3", "Leadership", "Web Design", "Web Development", "Web Applications", "jQuery", "Bootstrap", "SQL", "Java", "Github", "Management", "Team Building", "Research"];
/* Object creation example */
var bio = {
	"name" : "Jonathan Blanco",
	"role" : "Web Developer",
	"contacts" : {
		"email": "jblan053@fiu.edu",
		"mobile": "111-111-1111",
		"github" : "jblan053",
		"location": "Miami, FL"
	},
	"biopic" : "images/me.jpg",
	"welcomeMessage" : "Welcome to my resume online!",
	"skills" : skill
};

/* Creating objects using object literal notation (JSON) */
var education = {
	"firstName" : "Jonathan",
	"lastName" : "Blanco",
	"schools": [{
			"name" : "Florida International University",
			"location" : "Miami, FL",
			"degree" : "Bachelor of Science (B.S.)",
			"majors" : ["Information Technology"],
			"minors" : ["Physics"],
			"dates" : "2017",
			"url" : "http://www.fiu.edu/"
		}],
	"onlineCourses" : [{
			"title" : "Front End Web Developer",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com"
		}]
};

var work = {
	"jobs" : [{
			"employer" : "FIU",
			"title" : "Teaching Assitant",
			"location" : "Miami, FL",
			"dates": "2014-2017",
			"description" : "• Contributed to the stimulation of students in a high learning environment in programming. • Developed students’ knowledge and improved their problem solving skills. • Prepared activities engaging students in an interactive classroom and improving participation. • Instructed students in Mathematics and Chemistry increasing their performance in class."
		},
		{
			"employer" : "NASA",
			"title" : "Summer Intern",
			"location" : "Cape Canaveral, FL",
			"dates": "June-August 2015",
			"description" : "• Programmed searching tool in VBA enabling data analysis time to be reduced by 70%. • Supported and created concept of operations in the communication as well as the flow of data. • Developed research skills by evaluating GUI tools that interfaced with MySQL. • Documented the programs developed allowing users to easily install and use software."
		}]
};

var projects = {
	"projects" : [{
			"title" : "Web Interface",
			"dates" : "May 2015",
			"description" : "• Designed front-end for the retrieval of information from a personally created database. • Employed SQL, JavaScript, and HTML achieving a fresh design to interact with tables",		
			"images" : ["image_1"]
		},
		{
			"title" : "Restaurant Menu",
			"dates" : "December 2014",
			"description" : "• Created GUI tool to simulate a restaurant registration system. • Programmed in Java with the Swing GUI Builder.",
			"images" : ["image_1"]
		},
		{
			"title" : "Bagels and Sudoku",
			"dates" : "August 2014",
			"description" : "• Designed logic-based games learning complex algorithms. • Coded in Java implementing friendly interface with well formatted program output.",
			"images" : ["image_1"]
		}]
};

//String to substituted from the helper.js file for real values 
var data = "%data%";

bio.display = function() {

	//Show name and role
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	//Shows profile picture
	var formattedPic = HTMLbioPic.replace(data, bio.biopic);
	$("#header").prepend(formattedPic);

	//Show welcome message
	var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
	$("#header").append(formattedMsg);

	//Show my contacts
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	//Shows my skills
	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		bio.skills.forEach(function(skill) {
			var tempSkill = HTMLskills.replace(data, skill);
			$("#skills").append(tempSkill);
		});
	}
};

bio.display();

//Shows my work history
work.display = function() {
	var formattedEmployer, formattedJob, formattedLocation, formattedDate, formattedDescription;
	
	work.jobs.forEach(function(job) {

		$("#workExperience").append(HTMLworkStart);

		formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
		formattedJob = HTMLworkTitle.replace(data, job.title);
		formattedLocation = HTMLworkLocation.replace(data, job.location);
		formattedDate = HTMLworkDates.replace(data, job.dates);
		formattedDescription = HTMLworkDescription.replace(data, job.description);

		$(".work-entry:last").append(formattedEmployer + formattedJob);
		$(".work-entry:last").append(formattedDate + formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	});
};

work.display();

//Internationalizing my name. Ex: Jonathan Blanco to Jonathan BLANCO
// $("#main").append(internationalizeButton);
// function inName() {
// 	var nameArray = bio.name.split(" ");
// 	nameArray[1] = nameArray[1].toUpperCase();

// 	return nameArray[0] + " " + nameArray[1];
// }

//Shows my projects ****MISSING pictures and links***
projects.display = function() {

	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);

		var temp = HTMLprojectTitle.replace(data, project.title);
		$(".project-entry:last").append(temp);

		temp = HTMLprojectDates.replace(data, project.dates);
		$(".project-entry:last").append(temp);

		temp = HTMLprojectDescription.replace(data, project.description);
		$(".project-entry:last").append(temp);

		temp = HTMLprojectImage.replace(data, project.images);
		$(".project-entry:last").append(temp);
	});
};

projects.display();

//Shows my education
education.display = function() {

	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);

		var temp = HTMLschoolName.replace(data, school.name);
		temp = temp.replace("#", school.url);
		$(".education-entry:last").append(temp);

		temp = HTMLschoolDegree.replace(data, school.degree);
		$(".education-entry:last").append(temp);

		temp = HTMLschoolDates.replace(data, school.dates);
		$(".education-entry:last").append(temp);

		temp = HTMLschoolLocation.replace(data, school.location);
		$(".education-entry:last").append(temp);

		temp = HTMLschoolMajor.replace(data, school.majors);
		$(".education-entry:last").append(temp);
	});

	//This is for online courses
	$("#education").append("<br>");
	$("#education").append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(course) {
		$("#education").append(HTMLschoolStart);

		var temp = HTMLonlineTitle.replace(data, course.title);
		temp = temp.replace("#", course.url);
		$(".education-entry:last").append(temp);

		temp = HTMLonlineSchool.replace(data, course.school);
		$(".education-entry:last").append(temp);

		temp = HTMLonlineDates.replace(data, course.dates);
		$(".education-entry:last").append(temp);

		temp = HTMLonlineURL.replace(data, course.url);
		temp = temp.replace("#", course.url);
		$(".education-entry:last").append(temp);
	});
};

education.display();

//Shows the map
$("#mapDiv").append(googleMap);