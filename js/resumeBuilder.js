var bio = {
  "name": "Richard Gieg",
  "role": "Software Engineer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "richgieg@example.com",
    "github": "richgieg",
    "twitter": "@richgieg",
    "location": "Fairfield, CA"
  },
  "welcomeMessage": "lorm ipsum dolor sit amet etc etc etc.",
  "skills": [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the world"
  ],
  "bioPic": "images/fry.jpg"
};

bio.display = function() {
  // Name and role.
  var formattedName = HTMLheaderName.replace('%data%', this.name);
  var formattedRole = HTMLheaderRole.replace('%data%', this.role);
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);

  // Contacts in header and footer.
  for (var contact in this.contacts) {
    var formattedContact = HTMLcontactGeneric.replace('%contact%', contact);
    formattedContact = formattedContact.replace('%data%', this.contacts[contact]);
    $('#topContacts, #footerContacts').append(formattedContact);
  }

  // Bio pic.
  var formattedPic = HTMLbioPic.replace('%data%', this.bioPic);
  $('#header').append(formattedPic);

  // Welcome message.
  var formattedWelcome = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
  $('#header').append(formattedWelcome);

  // Skills.
  $('#header').append(HTMLskillsStart);
  var len = this.skills.length;
  for (var i = 0; i < len; i++) {
    var formattedSkill = HTMLskills.replace('%data%', this.skills[i]);
    $('#skills').append(formattedSkill);
  }
}

var work = {
  "jobs": [
    {
      "employer": "Schurman Retail Group",
      "title": "Systems Analyst",
      "location": "Fairfield, CA",
      "dates": "2015",
      "description": "Systems Analyst description."
    },
    {
      "employer": "Schurman Retail Group",
      "title": "Systems Analyst",
      "location": "Fairfield, CA",
      "dates": "2015",
      "description": "Systems Analyst description."
    },
    {
      "employer": "Schurman Retail Group",
      "title": "Systems Analyst",
      "location": "Fairfield, CA",
      "dates": "2015",
      "description": "Systems Analyst description."
    }
  ]
};

work.display = function() {
  var len = this.jobs.length;
  for (var i = 0; i < len; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer =
      HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription =
      HTMLworkDescription.replace("%data%", this.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

var projects = {
  "projects": [
    {
      "title": "Project #1",
      "dates": "2015",
      "description": "Project description.",
      "images": [
        "images/project1a.jpg",
        "images/project1b.jpg",
        "images/project1c.jpg"
      ]
    },
    {
      "title": "Project #2",
      "dates": "2015",
      "description": "Project description.",
      "images": [
        "images/project2a.jpg",
        "images/project2b.jpg",
        "images/project2c.jpg"
      ]
    },
    {
      "title": "Project #3",
      "dates": "2015",
      "description": "Project description.",
      "images": [
        "images/project3a.jpg",
        "images/project3b.jpg",
        "images/project3c.jpg"
      ]
    }
  ]
};

projects.display = function() {
  var len = this.projects.length;
  for (var i = 0; i < len; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle =
      HTMLprojectTitle.replace("%data%", this.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates =
      HTMLprojectDates.replace("%data%", this.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription =
      HTMLprojectDescription.replace("%data%", this.projects[i].description);
    $(".project-entry:last").append(formattedDescription);

    for (var image in projects.projects[i].images) {
      var formattedImage =
        HTMLprojectImage.replace("%data%", this.projects[i].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Solano Community College",
      "location": "Suisun City, CA",
      "degree": "N/A",
      "majors": ["Computer Programming", "Music"],
      "date": 2004,
      "url": "http://www.solano.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
};

education.display = function() {
// var HTMLschoolStart = '<div class="education-entry"></div>';
// var HTMLschoolName = '<a href="#">%data%';
// var HTMLschoolDegree = ' -- %data%</a>';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';
// var HTMLschoolLocation = '<div class="location-text">%data%</div>';
// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';


}

// Display all the info.
bio.display();
work.display();
projects.display();
education.display();

// Load the Google map.
$("#mapDiv").append(googleMap);