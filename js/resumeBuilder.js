var bio = {
  "name": "Richard Gieg",
  "role": "Software Engineer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "johndoe@example.com",
    "github": "johndoe",
    "twitter": "@johndoe",
    "location": "Fairfield, CA"
  },
  "welcomeMessage": "lorm ipsum dolor sit amet etc etc etc.",
  "skills": [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the world"
  ],
  "bioPic": "images/fry.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%', this.name);
  var formattedRole = HTMLheaderRole.replace('%data%', this.role);
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);


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
  for (var job in this.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer =
      HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription =
      HTMLworkDescription.replace("%data%", this.jobs[job].description);
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
  for (var project in this.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle =
      HTMLprojectTitle.replace("%data%", this.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates =
      HTMLprojectDates.replace("%data%", this.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription =
      HTMLprojectDescription.replace("%data%", this.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    for (var image in projects.projects[project].images) {
    var formattedImage =
      HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
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
      "dates": "2001",
      "url": "http://www.solano.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2014",
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
};

education.display = function() {

}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);