var work = {
	"jobs": [
		{
			"employer": "AT&T Managed Services",
			"title": "Principal Technical Architect",
			"location": "Lake Mary, FL",
			"dates": "August 2011 - present",
			"description": "Lead Integration Architect in the Operations Integration Management (OIM) organization.  Provide technical consultation of OIM requirements and capabilities to pre-sales solution development teams.  Provide strategic technical direction for OIM with regard to end-to-end process, project intake and workflow management, knowledge management and device migration tools and procedures."
		},
		{
			"employer": "AT&T Consulting",
			"title": "Senior Consultant",
			"location": "Austin, TX",
			"dates": "June 2000 - August 2011",
			"description": "IT Operations assessments, strategies and roadmaps. Network management toolset analysis, design and implementation."
		},
		{
			"employer": "International Network Services",
			"title": "Network Systems Consultant",
			"location": "San Francisco, CA",
			"dates": "January 1997 - June 2000",
			"description": "DNS/DHCP assessments. Network management toolset implementations."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "project 1",
			"dates": "2000 - 2001",
			"description": "description of project 1",
			"images": [ "images/project1a.jpg", "images/project1b.jpg" ]
		},
		{
			"title": "project 2",
			"dates": "2002 - 2003",
			"description": "description of project 2",
			"images": [ "images/project2a.jpg", "images/project2b.jpg" ]
		}
	]
};


var name = "Darin Davis";
var role = "Web Developer";
var contacts = {
	"mobile": "111-222-3344",
	"email": "darin@ABCXYZ.com",
	"github": "darindavis",
	"twitter": "@darindavis",
	"location": "Oviedo, FL"
};
var skills = ["Project Management", "Perl", "Web Development", "JavaScript", "HTML 5", "CSS 3"];

var bio = {
	"name" : name,
	"role" : role,
	"welcomeMessage" : "Welcome to my interactive resume",
	"contacts" : contacts,
	"skills" : skills,
	"bioPic" : "formattedBioPic"
};

var education = {
	"schools": [
		{
			"name": "University of Texas",
			"location": "Austin, TX",
			"degree": "Bacholar of Arts",
			"majors": ["Greek", "Computer Science"],
			"dates": "1986 - 1994",
			"url": "http://www.utexas.edu"
		},
		{
			"name": "University of Florida",
			"location": "Gainesville, FL",
			"degree": "Masters",
			"majors": ["CISE"],
			"dates": "1994 - 1996",
			"url": "http://www.cise.ufl.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "November 2014 - present",
			"url": "https://www.udacity.com/course/nd001"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#topContacts").append(HTMLmobile.replace("%data%", contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", contacts.location));


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	//$("#skills").append(HTMLskills.replace("%data%", bio.skills));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[4]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[5]));
}


for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	//console.log(formattedEmployer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	//console.log(formattedTitle);
	var combo = formattedEmployer + formattedTitle;
	//console.log(combo);
	//$(".work-entry:last").append(combo);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
}