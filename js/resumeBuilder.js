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
			"images": [ "http://placehold.it/50x50", "http://placehold.it/150x50" ]
		},
		{
			"title": "project 2",
			"dates": "2002 - 2003",
			"description": "description of project 2",
			"images": []
		},
		{
			"title": "project 3",
			"dates": "2004",
			"description": "description of project 3",
			"images": [ "http://placehold.it/50x50", "http://placehold.it/150x50" ]
		}
	],
	"display": function() {
		//console.log("invoked projects.display");
		for (var myProj in projects.projects) {
			//console.log("iterate through list of projects");
			$("#projects").append(HTMLprojectStart);
			var fmtTitle = HTMLprojectTitle.replace("%data%", projects.projects[myProj].title);
			//var fmtTitle = HTMLprojectTitle.replace("%data%", "some title");
			//console.log(fmtTitle);
			var fmtDates = HTMLprojectDates.replace("%data%", projects.projects[myProj].dates);
			var fmtDescr = HTMLprojectDescription.replace("%data%", projects.projects[myProj].description);

			var fmtImages = "";
			if (projects.projects[myProj].images.length > 0) {
				for (var img in projects.projects[myProj].images) {
					var fmtImages = fmtImages + HTMLprojectImage.replace("%data%", projects.projects[myProj].images[img]);
				}
			}
			$(".project-entry:last").append(fmtTitle + fmtDates + fmtDescr + fmtImages);
		}
	}
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
	"bioPic" : "images/biopic.png"
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

// adding bioPic not covered in course
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
// adding welcomeMessage not covered in course
$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));


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


var displayWork = function() {

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
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});


// quiz
function locationizer(work_obj) {
	var myLocs = [];

	//for (job in work_obj.jobs) { // without the var, job is global
	for (var job in work_obj.jobs) {
		console.log(work_obj.jobs[job].location);
		myLocs.push(work_obj.jobs[job].location);
	}
	return myLocs;
}

//console.log(locationizer(work));


// Internationalize Names Quiz
$("#main").append(internationalizeButton);

function inName(fullName) {
	var elements = fullName.split(" ");
	elements[0] = elements[0].toLowerCase();
	elements[1] = elements[1].toUpperCase();
	elements[0] = elements[0].slice(0,1).toUpperCase() + elements[0].slice(1);
	var intlName = elements[0] + " " + elements[1];

	return intlName;
}
//console.log(inName("sebastian thrun"));


// encapsulating functions quiz
projects.display();

$("#mapDiv").append(googleMap);