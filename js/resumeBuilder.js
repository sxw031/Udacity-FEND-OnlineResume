// making variables for bio
'use strict';
var skills = ["HTML5", "CSS3", "JavaScript", "Python", "Canvas", "Git"];

var contacts = {
	"mobile": "510-944-9912",
	"email": "jameswangishere@gmail.com",
	"linkedin": "https://www.linkedin.com/in/billstone",
	"github": "https://github.com/JamesWangbrothers",
	"portfolio": "https://www.facebook.com/jameswong300",
	"location": "#mapDiv"	
};

var bio = {
	"name": "Bill Stone",
	"role": "Full Stack Web Developer",
	"contacts": contacts,
	"skills": skills,
	"biopic": "images/myPicture.jpg",
	"welcomeMessage": "Web development specialist with experience in start-Ups as well as established operation leveraging expertise in responsive design, rendering, and problem solving to provide exceptional user support and user experience. Experience include managing and designing high profile websites."
};

var data = "%data%";
//list bio
bio.display = function() {
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	var formattedBiopic = HTMLheaderPic.replace(data, bio.biopic);
	var formattedMessage = HTMLmessage.replace(data, bio.welcomeMessage);
	
	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	var formattedLinkedin = HTMLlinkedin.replace(data, bio.contacts.linkedin);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github); 
	var formattedPortfolio = HTMLportfolio.replace(data, bio.contacts.portfolio);
	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

	$("#header").append(formattedBiopic);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);

	$(".flex-box").append(formattedMobile);
	$(".flex-box").append(formattedEmail);
	$(".flex-box").append(formattedLinkedin);
	$(".flex-box").append(formattedGithub);
	$(".flex-box").append(formattedPortfolio);
	$(".flex-box").append(formattedLocation);

	$("#footer").prepend(formattedMobile);
	$("#footer").prepend(formattedEmail);
	$("#footer").prepend(formattedLinkedin);
	$("#footer").prepend(formattedGithub);

	$("#header").append(formattedMessage);

	$("#skill").append(HTMLskillStart);

		for (var indexCount = 0; indexCount < skills.length; indexCount++) {
			var formattedSkills1 = HTMLskills.replace(data, skills[indexCount]);
			$("#skills").append(formattedSkills1);
		}	

};

var projects = {
	"projects": [
	{
		"title": "Profolio Website",
		"dates": "March 2016",
		"bullet1": "mobile first responsive design",
		"bullet2": "bootstrap framework for UI design",
		"description": "Javascript/Jquery for DOM modification",
		"demo": "http://www.bigbigz.com",
		"gitHub": "https://github.com/JamesWangbrothers/Udacity-FrontEndNanoDegree.git",
		"images": "123.jpg"
	},{
		"title": "Online Resume",
		"dates": "Feb 2016",
		"bullet1": "building features with APIs",
		"bullet2": "user experience optimization",
		"description": "JSON packaging",
		"demo": "http://www.wildChild.com",
		"gitHub": "https://github.com/JamesWangbrothers/Udacity-FrontEndNanoDegree.git",
		"images": "456.jpg"

	},{
		"title": "Arcade Game",
		"dates": "Feb 2016",
		"bullet1": "building features with APIs",
		"bullet2": "user experience optimization",
		"description": "Website Performance Optimization",
		"demo": "http://www.wildChild.com",
		"gitHub": "https://github.com/JamesWangbrothers/Udacity-FrontEndNanoDegree.git",
		"images": "678.jpg"

	},{
		"title": "Start-Up Website Host",
		"dates": "Feb 2016",
		"bullet1": "building features with APIs",
		"bullet2": "user experience optimization",
		"description": "Website Performance Optimization",
		"demo": "http://www.carpstreet.com",
		"gitHub": "https://github.com/JamesWangbrothers/Udacity-FrontEndNanoDegree.git",
		"images": "910.jpg"

	}]
};

//display projects using encapsulation
projects.display = function() {
	for (var indexCount = 0; indexCount < projects.projects.length; indexCount++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[indexCount].title);
		var formattedDemo = HTMLprojectDemo.replace(data, projects.projects[indexCount].demo);
		var formattedGitHub = HTMLprojectGitHub.replace(data, projects.projects[indexCount].gitHub);
		var formattedDates = HTMLprojectDates.replace(data, projects.projects[indexCount].dates);
		var formattedBullet1 = HTMLprojectDescription.replace("%data1%", projects.projects[indexCount].bullet1);
		var formattedBullet2 = formattedBullet1.replace("%data2%", projects.projects[indexCount].bullet2);
		var formatttedDescription = formattedBullet2.replace("%data3%", projects.projects[indexCount].description);
		
		
		$(".project-entry:last").prepend(formattedDemo);
		$(".project-entry:last").prepend(formattedGitHub);
		$(".project-entry:last").prepend(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formatttedDescription);

	}
};

var work = {
	"jobs": [
		{
			"employer": "Super Micro Computers, Inc.",
			"title": "Product Support Engineer",
	 		"location": "San Jose, CA, US",
	 		"dates": "December 2013 - January 2016",
	 		"description": "customer problem solving and analyze on server computing systems" 
		}
	]
};

//display working experience
work.display = function() {
	for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//concat employee and title
		var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[indexCount].employer);
		var formattedTitle = HTMLworkTitle.replace(data, work.jobs[indexCount].title);
		var formattedLocation = HTMLworkLocation.replace(data, work.jobs[indexCount].location);
		var formattedDates = HTMLworkDates.replace(data, work.jobs[indexCount].dates);
		var formatttedDescription = HTMLworkDescription.replace(data, work.jobs[indexCount].description);
		
		$(".work-entry:last").append(formattedEmployer);
		$(".work-entry:last").prepend(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedTitle);
		$(".work-entry:last").append(formatttedDescription);

	};
};


var education = {
	"schools": [{
		"name": "Udacity",
		"majors": ["Front-End Web Development"],
		"location": "Online Credential",
		"dates": "March 2016",
		"degree": "N/A",
		"url": "www.udacity.com"
	}, {
		"name": "University of Arkansas",
		"majors": ["M.S. in Electrical Engineering"],
		"location": "Fayetteville, AR",
		"dates": "September 2013",
		"degree": "N/A",
		"url": "www.uofa.edu"
	}, {
		"name": "University of Arkansas",
		"majors": ["B.S. in Electrical Engineering"],
		"location": "Fayetteville, AR",
		"dates": "August 2011",
		"degree": "N/A",
		"url": "www.uofa.edu"
	}],
	"onlineCourses": [{
		"title": "Web Development Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://www.udacity.com",
		"degree": "N/A"
	}]
};

education.display = function() {


	for (var indexCount = 0; indexCount < education.schools.length; indexCount++) {
		// create new div for work experience
		$("#education").append(HTMLschoolStart);
		//concat employee and title
		var formattedschoolName = HTMLschoolName.replace(data, education.schools[indexCount].name);
		var formattedschoolMajor = HTMLschoolMajor.replace(data, education.schools[indexCount].majors);
		var formattedschoolDates = HTMLschoolDates.replace(data, education.schools[indexCount].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace(data, education.schools[indexCount].location);
		
		$(".education-entry:last").prepend(formattedschoolName);
		$(".education-entry:last").prepend(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolMajor);
		
	}

	
};

bio.display();

work.display();
projects.display();
education.display();
//see a map 
$("#mapDiv").append(googleMap);




