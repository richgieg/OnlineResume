// Bio object definition.
var bio = {
  'name': 'Richard Gieg',
  'role': 'Software Engineer',
  'contacts': {
    'mobile': '555-555-5555',
    'email': 'richgieg@example.com',
    'github': 'richgieg',
    'twitter': '@richgieg',
    'location': 'Fairfield, CA'
  },
  'welcomeMessage': 'Highly-motivated and passionate software wizard.',
  'skills': [
    'Problem Solving',
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
    'C',
    'C++',
    'C#',
    'Assembly (x86/x64)',
    'Debugging',
    'Reverse Engineering',
    '.NET Framework',
    'Operating System Development',
    'SQL',
    'Win32 API',
    'Troubleshooting',
    'Windows Forms',
    'ASP.NET MVC'
  ],
  'bioPic': 'images/bio-pic.jpg'
};

// Bio object methods.
bio.displayNameAndRole = function() {
  var formattedName = HTMLheaderName.replace('%data%', this.name);
  var formattedRole = HTMLheaderRole.replace('%data%', this.role);
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
};

bio.displayContacts = function() {
  for (var contact in this.contacts) {
    var formattedContact = HTMLcontactGeneric.replace('%contact%', contact);
    formattedContact = formattedContact.replace('%data%', this.contacts[contact]);
    $('#topContacts, #footerContacts').append(formattedContact);
  }
};

bio.displayPicAndWelcomeMessage = function() {
  // Bio pic.
  var formattedPic = HTMLbioPic.replace('%data%', this.bioPic);
  $('#header').append(formattedPic);

  // Welcome message.
  var formattedWelcome = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
  $('#header').append(formattedWelcome);
};

bio.displaySkills = function() {
  var len = this.skills.length;
  if (len > 0) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < len; i++) {
      var formattedSkill = HTMLskills.replace('%data%', this.skills[i]);
      $('#skills').append(formattedSkill);
    }
  }
};

bio.display = function() {
  this.displayNameAndRole();
  this.displayContacts();
  this.displayPicAndWelcomeMessage();
  this.displaySkills();
};

// Work object definition.
var work = {
  'jobs': [
    {
      'employer': 'Schurman Retail Group',
      'title': 'Systems Analyst',
      'location': 'Fairfield, CA',
      'dates': 'November 2013 - May 2015',
      'description': 'Creatively analyze and resolve advanced technical ' +
                      'issues related to the point-of-sale software and ' +
                      'hardware used by the company as well as the Windows ' +
                      'operating system, software applications and ' +
                      'networking in general. Design, develop and maintain ' +
                      'software applications (primarily in C#, targeting the ' +
                      '.NET Framework), some being utility programs for IT ' +
                      'staff and other departments, while others are crucial ' +
                      'to the operation of the business (polling of sales ' +
                      'data from register computers for 400+ stores). Design ' +
                      'and utilize test cases to thoroughly test new ' +
                      'point-of-sale features and hardware. Provide support ' +
                      'to Level 1 and Level 2 store support personnel when ' +
                      'advanced technical issues are escalated. Maintain a ' +
                      'deep understanding of the point-of-sale software used ' +
                      'by the company, Windows internals, operating systems ' +
                      'fundamentals and networking protocols in order to ' +
                      'provide quick and effective support. Provide remote ' +
                      'training and support to the Clintons IT team in the ' +
                      'United Kingdom for the point-of-sale software used by ' +
                      'their 400+ stores.',
    },
    {
      'employer': 'Schurman Retail Group',
      'title': 'Technical Support Analyst II',
      'location': 'Fairfield, CA',
      'dates': 'April 2013 - November 2013',
      'description': 'Continued to perform the job functions of the IT ' +
                      'Support Specialist position. Provided technical ' +
                      'support to IT Support Specialists on the store ' +
                      'support help desk team when advanced technical issues ' +
                      'arose. Continued to write software applications and ' +
                      'scripts to improve the efficiency and effectiveness ' +
                      'of the store support help desk team (primarily in C#, ' +
                      'targeting the .NET Framework). Leveraged my writing ' +
                      'skills to create knowledge base articles to be used ' +
                      'by the help desk. Assisted in testing of new ' +
                      'point-of-sale features and hardware. Frequently dug ' +
                      'in to the company\'s point-of-sale software in order ' +
                      'to gain a deeper understanding and to develop better ' +
                      'support tools.',
    },
    {
      'employer': 'Schurman Retail Group',
      'title': 'IT Support Specialist',
      'location': 'Fairfield, CA',
      'dates': 'April 2011 - April 2013',
      'description': 'Provided friendly and effective technical support to ' +
                      'the company\'s retail stores via phone, remote access ' +
                      'software and sometimes in-person. Supported ' +
                      'point-of-sale PC systems running Windows XP and ' +
                      'Windows 7, receipt printers, pin pads, barcode ' +
                      'scanners, routers, switches, DSL/cable modems, ' +
                      'printers, fax machines and phones. Improved ' +
                      'efficiency of help desk team by writing software to ' +
                      'simplify various job functions (primarily in C#, ' +
                      'targeting the .NET Framework). Frequently volunteered ' +
                      'to take on difficult tasks, many times beyond the ' +
                      'scope of the position. Was selected to travel ' +
                      'independently to New York twice to upgrade ' +
                      'point-of-sale hardware at some of the company\'s ' +
                      'top-performing stores.'
    }
  ]
};

// Work object methods.
work.display = function() {
  var len = this.jobs.length;
  for (var i = 0; i < len; i++) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer =
      HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
    $('.work-entry:last').append(formattedDates);

    var formattedDescription =
      HTMLworkDescription.replace('%data%', this.jobs[i].description);
    $('.work-entry:last').append(formattedDescription);
  }
};

// Projects object definition.
var projects = {
  'projects': [
    {
      'title': 'Movie Trailer Website',
      'dates': '2015',
      'description': 'This is the first project in my pursuit of the ' +
                      'Full-Stack Web Developer Nanodegree from Udacity. ' +
                      'It\'s a simple web page that\'s generated dynamically ' +
                      'from Python code. It showcases six comedy movies I ' +
                      'enjoy and allows you to view their trailers.',
      'images': [
        'images/movie-trailer-website.jpg',
      ]
    },
    {
      'title': 'Portfolio Site',
      'dates': '2015',
      'description': 'Before setting out to complete this project, I had ' +
                      'the pleasure of working through three supporting ' +
                      'Udacity courses, each one geared towards planning ' +
                      'and building websites using HTML and CSS, with ' +
                      'responsiveness in mind. I believe through executing ' +
                      'this project I have demonstrated my ability to ' +
                      'properly implement the above tools in order to create ' +
                      'websites that look and behave as well on mobile ' +
                      'devices as they do on the desktop.',
      'images': [
        'images/portfolio-site.jpg',
      ]
    }
  ]
};

// Projects object methods.
projects.display = function() {
  var len = this.projects.length;
  for (var i = 0; i < len; i++) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle =
      HTMLprojectTitle.replace('%data%', this.projects[i].title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates =
      HTMLprojectDates.replace('%data%', this.projects[i].dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription =
      HTMLprojectDescription.replace('%data%', this.projects[i].description);
    $('.project-entry:last').append(formattedDescription);

    for (var image in projects.projects[i].images) {
      var formattedImage =
        HTMLprojectImage.replace('%data%', this.projects[i].images[image]);
      $('.project-entry:last').append(formattedImage);
    }
  }
};

// Education object definition.
var education = {
  'schools': [
    {
      'name': 'Solano Community College',
      'location': 'Suisun City, CA',
      'degree': 'N/A',
      'majors': ['Computer Programming', 'Music'],
      'date': 2004,
      'url': 'http://www.solano.edu/'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Intro to Computer Science',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/cs101'
    },
    {
      'title': 'Intro to HTML and CSS',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud304'
    },
    {
      'title': 'Responsive Web Design Fundamentals',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud893'
    },
    {
      'title': 'Responsive Images',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud882'
    },
    {
      'title': 'Programming Foundations with Python',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud036'
    },
    {
      'title': 'JavaScript Basics',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud804'
    },
    {
      'title': 'Intro to jQuery',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud245'
    }
  ]
};

// Education object methods.
education.displaySchools = function() {
  var len = this.schools.length;
  for (var i = 0; i < len; i++) {
    $('#education').append(HTMLschoolStart);

    var formattedNameAndDegree =
      HTMLschoolName.replace('%data%', this.schools[i].name);
    formattedNameAndDegree = formattedNameAndDegree +
      HTMLschoolDegree.replace('%data%', this.schools[i].degree);
    $('.education-entry:last').append(formattedNameAndDegree);

    var formattedDates =
      HTMLschoolDates.replace('%data%', this.schools[i].date);
    $('.education-entry:last').append(formattedDates);

    var mLen = this.schools[i].majors.length;
    for (var j = 0; j < mLen; j++) {
      var formattedMajor =
        HTMLschoolMajor.replace('%data%', this.schools[i].majors[j]);
      $('.education-entry:last').append(formattedMajor);
    }

    var formattedLocation =
      HTMLschoolLocation.replace('%data%', this.schools[i].location);
    $('.education-entry:last').append(formattedLocation);
  }
};

education.displayOnlineCourses = function() {
  var len = this.onlineCourses.length;
  if (len > 0) {
    $('#education').append(HTMLonlineClasses);
    for (var i = 0; i < len; i++) {
      $('#education').append(HTMLschoolStart);

      var formattedTitleAndSchool =
        HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title);
      formattedTitleAndSchool = formattedTitleAndSchool +
        HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
      $('.education-entry:last').append(formattedTitleAndSchool);

      var formattedDates =
        HTMLonlineDates.replace('%data%', this.onlineCourses[i].date);
      $('.education-entry:last').append(formattedDates);

      var formattedUrl =
        HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);
      $('.education-entry:last').append(formattedUrl);
    }
  }
};

education.display = function() {
  this.displaySchools();
  this.displayOnlineCourses();
};

// Display info from all objects.
bio.display();
work.display();
projects.display();
education.display();

// Load the Google map.
$('#mapDiv').append(googleMap);