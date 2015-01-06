var name = "Darin Davis";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedMobile = HTMLmobile.replace("%data%", "512-419-8311");
var formattedEmail = HTMLemail.replace("%data%", "darin@darindavis.net");
var formattedBioPic = HTMLbioPic.replace("%data%", "images/biopic.png");
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", "Welcome to my interactive resume");


var skills =
	["Project Management", "Perl", "Web Development", "JavaScript", "HTML 5", "CSS 3"];

var bio = {
	"name" : name,
	"role" : role,
	"contactInfo" : formattedEmail,
	"pictureURL" : formattedBioPic,
	"welcomeMsg" : formattedWelcomeMsg,
	"skills" : skills
};

$("#topContacts").append(bio.contactInfo);
$("#topContacts").append(bio.pictureURL);
$("#topContacts").append(bio.welcomeMsg);
$("#topContacts").append(bio.skills);

var work = {};
work.currentPosition = "Principal Technical Architect";
work.currentEmployer = "AT&T";
work.currentCity = "Lake Mary, FL";

var education = {};
education["school"] = "University of Florida";
education["years"] = "1994 - 1996";
education["city"] = "Gainesville, FL";

$("#topContacts").append(work["currentPosition"]);
$("#topContacts").append(education.school);

var education2 = {
	"schools": [
		{
			"name": "University of Texas",
			"city": "Austin, TX",
			"degree": "BA",
			"major": "Greek"
		},
		{
			"name": "University of Florida",
			"city": "Gainesville, FL",
			"degree": "MS",
			"major": "CISE"
		}
	]
}