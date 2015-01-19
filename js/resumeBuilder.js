// Contents:
//
// 1 - Data structures
// 2 - Subroutines
// 3 - Main code

// ###########################
// ##### DATA STRUCTURES #####
// ###########################

var name = "Darin Davis";
var formattedName;
var role = "Web Developer";
var formattedRole;

var contacts = {
	"mobile": "111-222-3333",
	"email": "UseContactForm@darindavis.net",
	"github": "darindavis",
	"twitter": "@darindavis",
	"location": "Oviedo, FL"
};
var skills = ["Project Management (PMP)", "Perl", "Web Development", "JavaScript", "HTML 5", "CSS 3"];
var mySkill;

var bio = {
	"name" : name,
	"role" : role,
	"welcomeMessage" : "Welcome to my interactive resume",
	"contacts" : contacts,
	"skills" : skills,
	"bioPic" : "images/biopic.png"
};

var work = {
	"jobs": [
		{
			"employer": "AT&T Managed Services",
			"title": "Principal Technical Architect",
			"location": "Lake Mary, FL",
			"dates": "August 2011 - present",
			"description": "Lead Integration Architect in the Operations Integration Management (OIM) organization.  Provide technical consultation of OIM requirements and capabilities to pre-sales solution development teams.  Provide strategic technical direction for OIM with regard to end-to-end process, project intake and workflow management, knowledge management and device migration tools and procedures.",
			"url": "http://www.att.com"
		},
		{
			"employer": "AT&T Consulting",
			"title": "Senior Consultant",
			"location": "Austin, TX",
			"dates": "June 2000 - August 2011",
			"description": "IT Operations assessments, strategies and roadmaps. Network management toolset analysis, design and implementation.",
			"url": "http://www.att.com"
		},
		{
			"employer": "International Network Services",
			"title": "Network Systems Consultant",
			"location": "San Francisco, CA",
			//"location": "New York, NY",
			"dates": "January 1997 - June 2000",
			"description": "DNS/DHCP assessments. Network management toolset implementations.",
			"url": "http://www.ins.com"
		}
	],
	"display": function() {
		//console.log("invoked work.display()");
		var job, formattedEmployer, formattedTitle, combo;
		var formattedLocation, formattedDates, formattedDescription;

		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			//console.log(formattedEmployer);
			formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			//console.log(formattedTitle);
			combo = formattedEmployer + formattedTitle;
			//console.log(combo);
			//$(".work-entry:last").append(combo);
			formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);

			// Assign to anchor tags the correct URL
			$(".work-entry:last").find('a').attr('href', work.jobs[job].url);
		}
	}
};


var projects = {
	"projects": [
		{
			"title": "Unicredit Bank",
			"dates": "September - October 2013",
			"description": "Network Device Discovery",
			"images": [ "images/unicredit-logo.jpg" ],
			"url": "https://www.unicredit.it",
			"location": "Milan, Italy"
		},
		{
			"title": "Bank of Ireland",
			"dates": "March 2011",
			"description": "Device Migration",
			"images": [ "images/bankofireland-logo.jpg" ],
			"url": "http://www.bankofireland.com",
			"location": "Dublin, Ireland"
		},
		{
			"title": "Etisalat Operations Management Assessment, Strategy and Roadmap",
			"dates": "April - July 2008",
			"description": "Co-led ITIL/ITSM assessment, strategy and roadmap for incumbent telecommunications provider in the United Arab Emirates.  Recommendations addressed organizational, process (Incident, Problem and Service Level Management) and technological (ticketing, knowledge management) requirements to scale support from 300 to 2000 enterprise customers.  Created roadmap of 15 tactical and strategic projects to achieve target state of world class service capability.",
			"images": [ "images/etisalat-logo.png", "images/UAE-flag.png" ],
			"url": "http://www.etisalat.com",
			"location": "Dubai, UAE"
		},
		{
			"title": "Harvard IT Operations Management Assessment",
			"dates": "October - December 2006",
			"description": "Operations management assessment, strategy and roadmap focusing on Incident management and network management tools.",
			"images": ["images/harvard-logo.gif", "images/boston-seal.jpg"],
			"url": "http://www.harvard.edu",
			"location": "Boston, Massachusetts"
		},
		{
			"title": "JP Morgan Chase DNS/DHCP Product Selection",
			"dates": "July - November 2001",
			"description": "DNS/DHCP TSP (Technology Selection Process)",
			"images": [ "images/JPMC-bldg-sign.jpg", "images/Lower_Manhattan_from_Helicopter.jpg"],
			"url": "http://www.jpmorganchase.com",
			"location": "New York City, New York" // This is not be pinned to the Google map because there is a bug in services.textSearch (the last location isn't pinned).
		}
	],
	"display": function() {
		//console.log("invoked projects.display()");
		var myProj, fmtTitle, fmtDates, fmtDescr, fmtImages, img;

		for (myProj in projects.projects) {
			//console.log("iterate through list of projects");
			$("#projects").append(HTMLprojectStart);
			fmtTitle = HTMLprojectTitle.replace("%data%", projects.projects[myProj].title);
			//fmtTitle = HTMLprojectTitle.replace("%data%", "some title");
			//console.log(fmtTitle);
			fmtDates = HTMLprojectDates.replace("%data%", projects.projects[myProj].dates);
			fmtDescr = HTMLprojectDescription.replace("%data%", projects.projects[myProj].description);

			fmtImages = "";
			if (projects.projects[myProj].images.length > 0) {
				for (img in projects.projects[myProj].images) {
					fmtImages = fmtImages + HTMLprojectImage.replace("%data%", projects.projects[myProj].images[img]);
				}
			}
			$(".project-entry:last").append(fmtTitle + fmtDates + fmtDescr + fmtImages);

			// Assign to anchor tags the correct URL
			$(".project-entry:last").find('a').attr('href', projects.projects[myProj].url);
		}
	}
};


var education = {
	"schools": [
		{
			"name": "University of Florida",
			"location": "Gainesville, FL",
			"degree": "Masters",
			"majors": ["CISE"],
			"dates": "1994 - 1996",
			"url": "http://www.cise.ufl.edu"
		},
		{
			"name": "University of Texas",
			"location": "Austin, TX",
			"degree": "Bacholar of Arts",
			"majors": ["Greek", "Computer Science"],
			"dates": "1986 - 1994",
			"url": "http://www.utexas.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "November 2014 - present",
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "Learn HTML5 Programming From Scratch",
			"school": "Udemy",
			"dates": "April 2014 - June 2014",
			"url": "https://www.udemy.com/learn-html5-programming-from-scratch"
		}
	],
	"display": function() {
		//console.log("invoked education.display()");
		var mySchool, fmtName, fmtDegree, fmtDates, fmtLoc, fmtMajors, maj, myCourse, fmtTitle, fmtSchool, fmtDates, fmtURL;

		for (mySchool in education.schools) {
			//console.log("iterate through list of schools");
			$("#education").append(HTMLschoolStart);
			fmtName = HTMLschoolName.replace("%data%", education.schools[mySchool].name);
			//console.log(fmtName);
			fmtDegree = HTMLschoolDegree.replace("%data%", education.schools[mySchool].degree);
			//console.log(fmtDegree);
			fmtDates = HTMLschoolDates.replace("%data%", education.schools[mySchool].dates);
			fmtLoc = HTMLschoolLocation.replace("%data%", education.schools[mySchool].location);

			fmtMajors = "";
			if (education.schools[mySchool].majors.length > 0) {
				for (maj in education.schools[mySchool].majors) {
					fmtMajors = fmtMajors + HTMLschoolMajor.replace("%data%", education.schools[mySchool].majors[maj]);
				}
			}
			$(".education-entry:last").append(fmtName + fmtDegree + fmtDates + fmtLoc + fmtMajors);

			// Assign to anchor tags the correct URL
			$(".education-entry:last").find('a').attr('href', education.schools[mySchool].url);
		}

		$("#education").append(HTMLonlineClasses);

		for (myCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			fmtTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[myCourse].title);
			fmtSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[myCourse].school);
			fmtDates = HTMLonlineDates.replace("%data%", education.onlineCourses[myCourse].dates);
			fmtURL = HTMLonlineURL.replace("%data%", education.onlineCourses[myCourse].url);
			$(".education-entry:last").append(fmtTitle + fmtSchool + fmtDates + fmtURL);

			// Q: Why do these next two flush left (without HTMLschoolStart)?
			//$("#education").append(fmtTitle + fmtSchool + fmtDates + fmtURL); // flush left
			//$("#education").append("<div>" + fmtTitle + fmtSchool + fmtDates + fmtURL + "</div>"); // flush left
			// A: Because CSS for education-entry specifies padding-left of 5%.

			// Assign to anchor tags the correct URL
			$(".education-entry:last").find('a').attr('href', education.onlineCourses[myCourse].url);
		}
	}
};


// #######################
// ##### SUBROUTINES #####
// #######################

// Used by internationalizeButton to convert last name to all caps.
function inName(fullName) {
	var elements, intlName;

	elements = fullName.split(" ");
	elements[0] = elements[0].toLowerCase();
	elements[1] = elements[1].toUpperCase();
	elements[0] = elements[0].slice(0,1).toUpperCase() + elements[0].slice(1);
	intlName = elements[0] + " " + elements[1];

	return intlName;
}
//console.log(inName("sebastian thrun"));


// #####################
// ##### MAIN CODE #####
// #####################

// Show header

formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));


// Show contact info

$("#topContacts").append(HTMLmobile.replace("%data%", contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", contacts.location));

$("#footerContacts").append(HTMLmobile.replace("%data%", contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", contacts.github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%", contacts.location));


// Show skills info

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	//$("#skills").append(HTMLskills.replace("%data%", bio.skills));
	for (mySkill = 0; mySkill < bio.skills.length; mySkill++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[mySkill]));
	}
}


// Show all jobs
work.display();

// Show all projects
projects.display();

// Show all education
education.display();

// Display custom Google map showing location of each employer and project
$("#mapDiv").append(googleMap);

// Give user option to convert name to international format
$("#main").append(internationalizeButton);

// define event handler for clicking on the page
$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});
