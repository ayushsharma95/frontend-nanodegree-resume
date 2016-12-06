/*
This is empty on purpose! Your code to build the resume will go here.
*/
$("#footerContacts").append(internationalizeButton);
 
var skills = ["Front-end", "Graphic Designing", "Back-end", "Machine Learning"];
var bio = {
 	"name" : "Ayush Sharma", 
 	"role" : "Full Stack Web Developer",
 	"contact": {
 		"email": "contact.ayush95@gmail.com",
 		"phone" : "+91-9953896535",
 		"github": "ayushsharma95",
 		"twitter": "@ayushsharma95",
 		"address": "New Delhi, India"
 	},
 	"skills": skills,
 	"biopic" : "images/batman.png",
 	"description": "I am web developer with a knack for good design. I also design scalable web applications. "
 };
bio.display = function() {
	var formattedName  = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
	var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
	var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact.address);
	var biopic = HTMLbioPic.replace("%data%", bio.biopic);
	var intro = HTMLwelcomeMsg.replace("%data%", bio.description);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedContact);
	$("#header").append(biopic);
	

	if(bio.skills.length > 0) {
		var i = 0;
		$("#header").append(HTMLskillsStart);
		for(i in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}

	}
	$("#header").append(intro);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedContact);

}

 var education = {
 	"school": [ 
	 	{
	 		"name": "Jaypee Institute of Information Technology",
	 		"location": "Noida, Uttar Pradesh",
	 		"degree": "Bachelors in Technology",
	 		"major": "Computer Science",
	 		"dates": "2013-2017",
	 		
	 	},
	 	{
	 		"name": "Carneigie Mellon University",
	 		"location": "Ann Arbor, Michigan",
	 		"degree" : "Masters in Science",
	 		"major": "Human Computer Interaction",
	 		"dates": "2018-2020"
	 	}
 	]
,
 "onlineCourses": [
 {
 	"name":"Full Stack Web Developer",
 	"school": "Udacity",
 	"date": 2017,
 	"url": "www.udacity.com"
 },
 {
 	"name": "Machine Learning Specialization",
 	"school": "University of Washington",
 	"date": 2016,
 	"url": "www.coursera.org"
 }
 ]
}
education.display = function() {
	$("#education").append(HTMLschoolStart);
	for(var e in education.school) {
		formattedsName = HTMLschoolName.replace("%data%", education.school[e].name);
		formattedsDate = HTMLschoolDates.replace("%data%", education.school[e].dates);
		formattedsMajor = HTMLschoolMajor.replace("%data%", education.school[e].major);
		formattedsDegree = HTMLschoolDegree.replace("%data%", education.school[e].degree);
		formattedsLocation = HTMLschoolLocation.replace("%data%", education.school[e].location);
		$(".education-entry").append(formattedsName);
		$(".education-entry").append(formattedsDate);
		$(".education-entry").append(formattedsDegree);
		$(".education-entry").append(formattedsMajor);
		$(".education-entry").append(formattedsLocation);
	}
}
 var projects = {
 	"minor": [
 	{
 		"title": "Merken: An online tool to boost learning.",
 		"description": "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. What's happened to me? he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops",
 		"date": "3rd year, 2015-2016",
 		"image": "images/p1.png"
 	},
 	
 	{
 		"title": "Machine Learning techniques for Breast cancer diagnosis and prognosis.",
 		"description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee",
 		"date": "4th year, 2016-2017",
 		"image": "images/p2.png"
 	}]
 };
 projects.display = function() {
 	$("#projects").append(HTMLprojectStart);
 	for(var p in projects.minor) {
 		var formattedpTitle = HTMLprojectTitle.replace("%data%", projects.minor[p].title);
 		var formattedpDate = HTMLprojectDates.replace("%data%", projects.minor[p].date);
 		var formattedpDesc = HTMLprojectDescription.replace("%data%", projects.minor[p].description);
 		var formattedpImg = HTMLprojectImage.replace("%data%", projects.minor[p].image);
 		$(".project-entry").append(formattedpTitle);
 		$(".project-entry").append(formattedpDate);
 		$(".project-entry").append(formattedpDesc);
 		$(".project-entry").append(formattedpImg);
 		$(".project-entry").append('<hr>')

 	}
 }


 var work = {
 	"jobs": [
 	{
	 	"employer": "Opus Tutorial",
	 	"title": "Web Developer",
	 	"date": "2015-Current",
	 	"location": "From home",
	 	"description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."	
 	},
 	{
 		"employer" : "Infosys",
 		"title" : "Software Engineer",
 		"date" : "January 2018",
 		"location" : "Mysore",
 		"description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
 	}
 	]
 };

 work.display = function() {
 	$("#workExperience").append(HTMLworkStart);
 	for(j in work.jobs) {
 		formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
 		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
 		formattedJob = formattedEmployer + formattedTitle;
 		formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].date);
 		formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[j].description);
 		formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
 		$(".work-entry").append(formattedJob);
 		$(".work-entry").append(formattedDates);
 		$(".work-entry").append(formattedLocation);
 		$(".work-entry").append(formattedDesc);
 	}
 }

 var inName = function(currentName) {
 	currentName = currentName.trim().split(" ");
 	var firstName  = currentName[0];
 	var lastName = currentName[1];
 	var inName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.toUpperCase();
 	return inName;
 }

 bio.display();
 work.display();
 projects.display();
 education.display();
 $("#mapDiv").append(googleMap)
